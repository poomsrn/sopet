import React, { useState } from 'react'
import {Animated, Dimensions, Image, ImageBackground, Keyboard, Modal, Platform, StyleSheet, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../constants/color';
import device from '../constants/device';

import mainScreenBackground from '../assets/pages/mainScreenBackground.png'

import testImg from '../assets/images/testImg.png'
import primaryLogo from '../assets/images/primaryLogo.png'

import TestScreen from './TestScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const createHorizontalBox = (data) => {
    return (
        data.map((e) => {
            return (
                <TouchableOpacity key={e.uniqueId} style={styles.itemContainer}>
                    <Image
                        source={e.shopImg || e.hospitalImg}
                        style={{width: '100%',
                            height: '80%',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />
                    <View style={{height: '20%', justifyContent: 'center'}}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Kanit-Medium'}}
                        >
                            {e.shopName || e.HospitalName}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        })
    )
    
}

export default function HomeScreen({ navigation }) {

    const [shopList, setShopList] = useState([
        { shopImg: testImg, shopName: "ร้านป้าเช็ง" },
        { shopImg: primaryLogo, shopName: "SOPet" },
        { shopImg: testImg, shopName: "ร้านป้าเช็ง" },
        { shopImg: primaryLogo, shopName: "SOPet" },
        { shopImg: testImg, shopName: "ร้านป้าเช็ง" },
    ])

    const [hospitalList, setHospitalList] = useState([
        { hospitalImg: primaryLogo, HospitalName: "SOPet" },
        { hospitalImg: testImg, HospitalName: "ร้านป้าเช็ง" },
        { hospitalImg: primaryLogo, HospitalName: "SOPet" },
        { hospitalImg: testImg, HospitalName: "ร้านป้าเช็ง" },
        { hospitalImg: primaryLogo, HospitalName: "SOPet" },
    ])

    return (
        <React.Fragment>
            {device.iPhoneNotch && (
                <Animated.View style={styles.iPhoneNotch} />
            )}

            <ImageBackground
                source={mainScreenBackground}
                style={{flex: 1}}
                resizeMode='stretch'
            >
                <View style={{flex: 2,
                    width: WIDTH,
                    justifyContent: 'center',
                    backgroundColor: color.sopetMediumBrown}}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%'}}>
                        <Image
                            source={primaryLogo}
                            resizeMode='contain'
                            style={{height: 50, width: 50,}}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{justifyContent: 'center', marginHorizontal: 7}}>
                                <Text style={{textAlign: 'right',
                                    textAlignVertical: 'center',
                                    fontFamily: 'Kanit-Medium',
                                    fontSize: 14}}
                                >
                                    John Wick{"\n"}ยอดเงินคงเหลือ: 69 บาท
                                </Text>
                            </View>
                            <Image
                                source={testImg}
                                resizeMode='contain'
                                style={{height: 50, width: 50, borderRadius: 50}}
                            />
                        </View>
                    </View>

                </View>

                <View style={{flex: 3, backgroundColor: 'white'}}>

                </View>

                <View style={{flex: 18}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1,
                            justifyContent: 'center',
                            marginHorizontal: '5%'}}
                        >
                            <Text style={{textAlignVertical: 'center',
                                fontFamily: 'Kanit-Light',
                                fontSize: 24}}
                            >
                                Hospital near you
                            </Text>
                        </View>
                        <View style={{flex: 5}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{flexDirection: 'row'}}>
                                    {createHorizontalBox(hospitalList)}
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1,
                            justifyContent: 'center',
                            marginHorizontal: '5%'}}
                        >
                            <Text style={{textAlignVertical: 'center',
                                fontFamily: 'Kanit-Light',
                                fontSize: 24}}
                            >
                                Shop
                            </Text>
                        </View>
                        <View style={{flex: 5}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{flexDirection: 'row'}}>
                                    {createHorizontalBox(shopList)}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    iPhoneNotch: {
        height: 44,
        position: 'absolute',
        top: 0,
        width: '100%',
        // backgroundColor: 'red',
        zIndex: 20
    },
    containerHeader: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: '5%',
        paddingTop: device.iPhoneNotch ? 60 : 36,
        // position: 'absolute',
        // top: 0,
        backgroundColor: color.sopetLightBrown,
        zIndex: 10
    },
    inputBox: {
        width: WIDTH * 0.86,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Kanit-Light',
        paddingHorizontal: 20,
        borderRadius: 40,
        backgroundColor: 'white',
    },
    itemContainer: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: 'white',
    },
  });