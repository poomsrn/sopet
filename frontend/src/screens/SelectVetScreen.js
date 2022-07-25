import React, { useState } from 'react'

import {Animated, Dimensions, Image, ImageBackground, Keyboard, Modal, Platform, Pressable, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Fontisto';

import color from '../constants/color';
import NavBar from '../components/NavBar';


import loginBackground from '../assets/pages/loginBackground.png'
import primaryLogo from '../assets/images/primaryLogo.png'
import testImg from '../assets/images/testImg.png'

import line from '../assets/images/line.png'
import gmail from '../assets/images/gmail.png'
import facebook from '../assets/images/facebook.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const EditBox = (props) => {
    return (
        <View style={{flexDirection: 'row', marginVertical: '2%'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Kanit-Light'}}>
                    {props.itemName}
                </Text>
            </View>
            <View style={{flex: 3}}>
                <TextInput style={styles.inputBox}
                    // defaultValue={}
                    placeholder={"Search Doctor here!"}
                    onChangeText={(text) => setSearchValue(text)}
                    value={searchValue}
                    placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoCompleteType={'off'}
                    // keyboardType={props.keyboardType}
                    // secureTextEntry={props.secureTextEntry}
                    // onTouchStart={props.onTouchStart}
                    // editable={props.editable}
                    // showSoftInputOnFocus={props.showSoftInputOnFocus} 
                />
            </View>
        </View>
    )
}

const createVerticalBox = (contactList) => {
    return (
        contactList.map((e) => {
            return (
                <TouchableOpacity key={e.uniqueId} style={styles.contactItem} onPress={()=>{console.log("go to " + e.url);}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 2, aspectRatio: 1}}>
                            <Image source={e.img} style={{flex: 1, aspectRatio: 1}}/>
                        </View>
                        
                        <View style={{flex: 7, justifyContent: 'center'}}>
                            <Text style={{
                                paddingHorizontal: '10%',
                                textAlignVertical: 'center',
                                fontFamily: 'Kanit-Light',
                            }}>
                                {e.description}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    )
}

export default function ContactUsScreen({ navigation }) {
    
    const [searchValue, setSearchValue] = useState("");
    const [isPopup, setIsPopup] = useState(true)
    const [contactList, setContactList] = useState([
        {   img: facebook,
            description: 'SOPet.co ปรึกษาสัตวแพทย์ออนไลน์แบบทันทีกับสัตวแพทย์ตัวจริง',
            url: "facebook"
        },
        {   img: line,
            description: 'SOPet.co ปรึกษาสัตวแพทย์ออนไลน์แบบทันทีกับสัตวแพทย์ตัวจริง',
            url: "line"
        },
        {   img: gmail,
            description: 'sopetofficial@gmail.com',
            url: "gmail"
        },
    ])

    return (
            <SafeAreaView style={{flex: 1, backgroundColor: color.sopetLightBrown}}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%',}}>
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

                <View style={{flex: 1, backgroundColor: color.sopetLightBrown, flexDirection: 'row', marginLeft: "0%"}}>
                        {/* <TextInput style={styles.inputBox}
                            // defaultValue={}
                            placeholder={"Search Doctor here!"}
                            onChangeText={(text) => setSearchValue(text)}
                            value={searchValue}
                            placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoCompleteType={'off'}
                            // keyboardType={props.keyboardType}
                            // secureTextEntry={props.secureTextEntry}
                            // onTouchStart={props.onTouchStart}
                            // editable={props.editable}
                            // showSoftInputOnFocus={props.showSoftInputOnFocus} 
                        /> */}
                        {/* <View style={{justifyContent:"center",position: 'relative',right: 30}}>
                            <Icon
                                name = "search" size = {30} 
                            >
                            </Icon>
                        </View> */}

                        <View style={[styles.contactItem, {backgroundColor: color.sopetLightBrown}]} onPress={()=>{console.log("test");}}>
                            <TextInput
                                onChangeText={(text) => setSearchValue(text)}
                                value={searchValue}
                            >               
                            </TextInput>
                        </View>
                        <View style={{justifyContent:"center",position: 'relative',top:'0.5%' ,right: 60}}>
                            <Icon
                                name = "search" size = {25} 
                            >
                            </Icon>
                        </View>

                                    
                </View>


                <View style={{flex: 11, backgroundColor: color.sopetLightBrown}}>
                    <Modal transparent={true} visible={isPopup} animationType={'fade'}>
                        <Pressable onPress={()=>{setIsPopup(false)}} style={{flex: 1, width: '100%', alignSelf: 'center', justifyContent: 'center', backgroundColor: '#000000aa'}}>
                            <View style={{width: '50%', height: '10%', justifyContent: 'center', alignSelf: 'center', borderRadius: 10, padding: 20, backgroundColor: 'white'}}>
                                <Text style={[styles.headText, {textAlignVertical: 'center', color: '#2F3C59'}]}>Test</Text>
                            </View>
                        </Pressable>
                    </Modal>

                    {/* <ScrollView
                        style={{margin: '10%'}}
                    >
                        {createVerticalBox(contactList)}
                    </ScrollView> */}
                </View>

            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    iPhoneNotch: {
        height: 44,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 20
    },
    contactItem: {
        width: "90%",
        height: "70%",
        justifyContent: 'center',
        // padding: '5%',
        // marginVertical: '5%',
        marginVertical: '3%',
        marginHorizontal: '5%',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 6,
    }
  });