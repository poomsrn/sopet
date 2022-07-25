import React, { useState } from 'react'
import {
    Animated,
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';
import device from '../../constants/device';

import registerBackground from '../../assets/pages/registerBackground.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function RegisterScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [hidePass, setHidePass] = useState(true)

    const registerHandler = async () => {
        console.log("hello")
        console.log(email)
        console.log(pass)
        axios.post('http://localhost:8000/client/register/', {
            email: email,
            password: pass
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return (
        <React.Fragment>
            {device.iPhoneNotch && (
                <Animated.View style={styles.iPhoneNotch} />
            )}
            <Animated.View style={styles.containerHeader}>
                {/* <Text>
                    HeaderText
                </Text> */}
            </Animated.View>


            <ImageBackground
                source={registerBackground}
                style={{flex: 1}}
                resizeMode='stretch'
            >
                <View style={{flex: 2}}></View>
                <View style={{flex: 8, justifyContent: 'space-evenly'}}>
                    <TextInput style={styles.inputBox}
                        placeholder={'ชื่อ'}
                        onChangeText={text => setName(text)}
                        placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                        // underlineColorAndroid='transparent'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType={'off'}
                        // keyboardType={'email-address'}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder={'อีเมล'}
                        onChangeText={text => setEmail(text)}
                        placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                        // underlineColorAndroid='transparent'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType={'off'}
                        keyboardType={'email-address'}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '7%'}}>
                        <TextInput style={styles.inputBox}
                            placeholder={'รหัสผ่าน'}
                            onChangeText={text => setPass(text)}
                            placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                            // underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoCompleteType={'off'}
                            secureTextEntry={hidePass}
                        />
                        <TouchableOpacity style={{position: 'relative',
                            right: 40,
                            top: 0,
                            justifyContent: 'center'}}
                            onPressIn={()=>setHidePass(false)}
                            onPressOut={()=>setHidePass(true)}
                        >
                            <Icon
                                name={'eye-outline'}
                                size={20}
                                color={'rgba(0, 0, 0, 0.7)'}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: '7%'}}>
                        <TextInput style={styles.inputBox}
                            placeholder={'ยืนยันรหัสผ่าน'}
                            onChangeText={text => setConfirmPass(text)}
                            placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                            // underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoCompleteType={'off'}
                            secureTextEntry={hidePass}
                        />
                    </View>

                    <TouchableOpacity style={[styles.inputBox, {
                            backgroundColor: color.sopetDarkBrown,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            elevation: 10,}]}
                            onPress={()=>{registerHandler()}}
                        >
                            <Text style={{textAlign: 'center',
                                fontFamily: 'Kanit-Light',
                                color: 'white'}}
                            >
                                สร้างบัญชี
                            </Text>
                        </TouchableOpacity>
                </View>

                <View style={{flex: 3}}>

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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10
    }
  });