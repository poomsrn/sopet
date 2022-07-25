import React, { useState } from 'react'
import {
    Animated,
    Dimensions,
    Image,
    ImageBackground,
    Keyboard,
    Linking,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';
import device from '../../constants/device';

import loginBackground from '../../assets/pages/loginBackground.png'
import primaryLogo from '../../assets/images/primaryLogo.png'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [hidePass, setHidePass] = useState(true)

    const loginHandler = async () => {
        console.log("hello")
        console.log(email)
        console.log(pass)
        axios.post('http://localhost:8000/client/login/', {
            email: email,
            password: pass
        })
        .then(function (response) {
            console.log(response);
            navigation.navigate("MainScreen")
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
                source={loginBackground}
                style={{flex: 1}}
                resizeMode='stretch'
            >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center'}}
                    >
                        <Image
                            source={primaryLogo}
                            resizeMode='stretch'
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{flex: 6,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <View style={{flex: 3,
                        width: WIDTH,
                        justifyContent: 'space-around'
                    }}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{textAlign: 'center', fontFamily: 'Kanit-Light'}}>
                                ยังไม่เป็นสมาชิก?{'\t'}
                            </Text>
                            <Text
                                style={{textAlign: 'center', fontFamily: 'Kanit-Light', textDecorationLine: 'underline'}}
                                onPress={()=>{navigation.navigate("RegisterScreen")}}
                            >
                                สมัครเลย
                            </Text>
                        </View>
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

                        <View style={{flexDirection: 'row',
                            width: '85%',
                            justifyContent: 'flex-end'}}
                        >
                            <Text style={{fontFamily: 'Kanit-Light'}}>
                                ลืมรหัสผ่าน?
                            </Text>
                        </View>

                        <TouchableOpacity style={[styles.inputBox, {
                            backgroundColor: color.sopetDarkBrown,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            elevation: 10,}]}
                            onPress={()=>{
                                console.log("Email: " + email + "\nPass: " + pass)
                            }}
                        >
                            <Text style={{textAlign: 'center',
                                fontFamily: 'Kanit-Light',
                                color: 'white'}}
                                onPress={()=>{loginHandler()}}
                            >
                                เข้าสู่ระบบ
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1, justifyContent: 'space-evenly', width: WIDTH}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Kanit-Light'}}>
                                หรือเข้าสู่ระบบด้วย
                            </Text>
                        </View>
                        <View style={{flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: ''}}
                        >
                            <Image
                                source={google}
                                resizeMode={'contain'}
                                style={{width: '20%', height: '80%'}}
                            />
                            <Image
                                source={facebook}
                                resizeMode={'contain'}
                                style={{width: '20%', height: '80%'}}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{flex: 1,
                        justifyContent: 'center',
                    }}
                >

                    <Text style={{textAlign: 'center',
                        fontSize: 16,
                        fontFamily: 'Kanit-Light'}}
                    >
                        ติดต่อเพื่อ
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center',
                            fontSize: 16,
                            fontFamily: 'Kanit-Light'}}
                        >
                            สร้างบัญชี{'\t'}
                        </Text>
                        <Text style={{textAlign: 'center',
                            fontSize: 16,
                            fontFamily: 'Kanit-Medium'}}
                            onPress={()=>{Linking.openURL("https://www.facebook.com/sopetofficial")}}
                        >
                            สัตวแพทย์
                        </Text>
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
    }
  });