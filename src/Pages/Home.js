import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView, SafeAreaView } from 'react-native'

import { EvilIcons } from '@expo/vector-icons';

import { promos, features } from "./Utils"
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {



    const Header = () => {
        return (
            <View style={{
                width: "90%",
                height: 150,
                backgroundColor: '#3CB371',
                marginHorizontal: 20,
                borderRadius: 10,
                marginVertical: 30,
                flexDirection: 'row'
            }}
            >
                <Image source={{
                    uri: "https://res.cloudinary.com/doouwbecx/image/upload/v1614165151/Digital%20Wallet/sssa-removebg-preview_d3ub7n.png"
                }}
                    style={{
                        width: 100,
                        height: 150,
                        flex: 1,
                        borderRadius: 10
                    }}
                />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Go Premium</Text>
                    <Text style={{ color: 'lightgray', width: 140, lineHeight: 20 }}>Upgrade to premium, get more profit now!</Text>
                </View>

            </View>
        )
    }


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, paddingLeft: 2, marginBottom: 20, marginHorizontal: 10 }}
            >
                <Image
                    source={{ uri: item.image }}
                    style={{
                        width: "100%",
                        height: 100,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    }}
                    resizeMode="cover"
                />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 13, marginVertical: 5, width: 150 }}>{item.name}</Text>
                    <Text style={{ color: 'grey', fontSize: 13, width: 150 }}>{item.description}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    const renderFeatures = () => {

        const renderFeaturesItem = ({ item }) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10, height: 100 }}>
                    <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey', borderRadius: 100 }}>
                        <Image source={{ uri: item.image }} style={{ width: 20, height: 20 }} resizeMode="contain" />
                    </View>

                    <Text style={{ width: 52, textAlign: 'center', marginTop: 15, fontWeight: '600' }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        const featureHeader = () => {
            return (
                <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Features</Text>
            )
        }
        return (
            <FlatList
                ListHeaderComponent={featureHeader}
                numColumns={4}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={features}
                keyExtractor={item => item.id}
                renderItem={renderFeaturesItem}
            />
        )
    }

    const HeaderComponent = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Special Promo</Text>
                <Text style={{ color: 'grey' }}>View All</Text>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hello!</Text>
                    <Text style={{ color: 'grey', fontSize: 16 }}>Jimmy Sulivan</Text>
                </View>

                <TouchableOpacity>
                    <EvilIcons name="bell" size={24} color="black" />
                    <Text style={{ backgroundColor: 'red', width: 5, height: 5, borderRadius: 100, position: 'absolute', right: 0 }}></Text>
                </TouchableOpacity>
            </View>
            {Header()}
            <ScrollView>
                <SafeAreaView>
                    {renderFeatures()}
                    <FlatList
                        ListHeaderComponent={HeaderComponent}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={promos}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                </SafeAreaView>
            </ScrollView>
            
        </View>
    )
}

export default Home
