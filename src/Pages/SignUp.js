import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Dimensions,
    Modal, FlatList, KeyboardAvoidingView, ScrollView
} from 'react-native';

import LinearGradient from "react-native-linear-gradient"
import { AntDesign, EvilIcons, FontAwesome, Octicons } from "@expo/vector-icons"

const SignUp = ({navigation}) => {

    const [showPassword, setShowPassword] = useState(false)
    const [areas, setAreas] = useState([])
    const [selectedArea, setSelectedArea] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const windowHeight = Dimensions.get('window').height;



    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {
            const listData = data.map(item => {
             return {
                code: item.alpha2Code,
                name: item.name,
                callingCode: `+${item.callingCodes[0]}`,
                flag:`https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
             } 
            })

            setAreas(listData)

            if(listData.length > 0) {
                let defaultData = listData.filter(a => a.code == "US")

                if (defaultData.length > 0) {
                    setSelectedArea(defaultData[0])
                }
            }
        })


    }, [])


    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    padding: 10,
                    flexDirection: 'row',
                }}

                onPress={() => {
                    setSelectedArea(item)
                    setModalVisible(false)
                }}
            >
                <Image source={{uri: item.flag}} style={{width: 30, height: 30, marginRight: 10}} />
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#3CB371', paddingHorizontal: 10 }}>
            <TouchableOpacity
                style={{
                    marginTop: 50,
                    flexDirection: 'row'
                }}

            >
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={{ color: 'white', paddingLeft: 5, fontSize: 18 }}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ marginVertical: 70 }}>
                <Image style={{ width: "100%", height: 100 }} resizeMode="contain" source={{ uri: "https://res.cloudinary.com/doouwbecx/image/upload/v1614007491/Digital%20Wallet/wallie-removebg-preview_nebtp5.png" }} />
            </View>

            <View style={{marginHorizontal: 15}}>
                <View>
                    <Text style={{ color: 'white' }}>Full Name</Text>
                    <TextInput
                        style={{
                            borderColor: "white",
                            padding: 5,
                            borderWidth: 1,
                            marginTop: 5,
                            color: 'white'
                        }}
                        placeholder=" Enter Full Name"
                        placeholderTextColor="white"

                    />
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 15 }}>
                    <Text style={{ color: 'white' }}>Phone Number</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity 
                            style={{flexDirection: 'row', alignItems: 'center'}}
                            onPress={() => setModalVisible(true)}
                            >
                            <EvilIcons name="chevron-down" size={24} color="white" />
                            <Image 
                                source={{uri: selectedArea?.flag}}
                                style={{
                                    width: 20,
                                    height: 20,                              
                                }}
                            />
                            <Text style={{color: 'white'}}>{selectedArea?.callingCode}</Text>
                        </TouchableOpacity>
                            <TextInput
                                style={{
                                    width: "70%",
                                    borderColor: "white",
                                    borderWidth: 1,
                                    padding: 5,
                                    color: 'white'
                                }}
                                placeholder=" Enter Digits"
                                placeholderTextColor="white"
                            />
                        </View>


                    </View>

                </View>

                <View style={{ marginTop: 20, marginHorizontal: 15 }}>
                    <Text style={{ color: 'white' }}>Password</Text>
                    <TextInput
                        style={{
                            borderColor: "white",
                            padding: 5,
                            borderWidth: 1,
                            marginTop: 5,
                            color: 'white'
                        }}
                        placeholder=" Enter Password"
                        placeholderTextColor="white"
                        secureTextEntry={showPassword}

                    />
                    <TouchableOpacity 
                        style={{position: 'absolute', right: 5, bottom: 10}}
                        onPress={() => setShowPassword(!showPassword)}
                        >
                            {
                                showPassword ? <Octicons name="eye-closed" size={20} color="white" /> : <Octicons name="eye" size={20} color="white" />
                            }
                       
                        
                    </TouchableOpacity>
                    
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                >
                    <View>
                        <View
                            style={{
                                height: windowHeight,
                                width: 300,
                                backgroundColor: 'lightgreen',
                                borderRadius: 10,
                            }}
                        >
                            <FlatList 
                                data={areas}
                                keyExtractor={item => item.code}
                                renderItem={renderItem}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: 10,
                                    marginBottom: 10
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

                <TouchableOpacity 
                    style={{backgroundColor: 'black',padding: 20, borderRadius: 10, marginHorizontal: 15, marginTop: 50, alignItems: 'center'}}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={{color: 'white'}}>Continue</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

export default SignUp


const styles = StyleSheet.create()