import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons"

const Scan = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <TouchableOpacity style={styles.buttons} onPress={() => setScanned(false)} ><Text style={{ color: 'white' }}>Tap to Scan Again</Text></TouchableOpacity>}


            <View style={{ backgroundColor: 'white', height: 150, position: 'absolute', bottom: 0, width: "100%", borderTopRightRadius: 30, borderTopLeftRadius: 30, padding: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Another Payment methods</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name="mobile-phone" size={27} color="#663399" />
                        <Text style={{marginLeft: 5, fontSize: 18}}>Phone Number</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="barcode" size={27} color="#3CB371" />
                        <Text style={{marginLeft: 5, fontSize: 18}}>Barcode</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>


    )
}

export default Scan


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttons: {
        marginHorizontal: 10,
        backgroundColor: '#3CB371',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',

    }
});