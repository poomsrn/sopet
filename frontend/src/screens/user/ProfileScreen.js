import React, { useState } from 'react'
import {
    Dimensions,
    Image,
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';
import device from '../../constants/device';

import loginBackground from '../../assets/pages/loginBackground.png'

import testImg from '../../assets/images/testImg.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ListItem = (props) => {
    return (
        <TouchableOpacity style={{flex: 1}} onPress={props.onPress}>
            <View style={{height: 1, marginHorizontal: '5%', backgroundColor: 'black'}}/>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: 'center'}}
                >
                    <Text style={{
                        textAlignVertical: 'center',
                        fontFamily: 'Kanit-Light',
                        fontSize: 16,
                        marginLeft: '15%'}}
                    >
                        {props.text}
                    </Text>
                </View>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: '10%'}}>
                    <Icon
                        name={'chevron-right'}
                        size={30}
                        style={{alignSelf: 'center'}}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function ProfileScreen({ navigation }) {

    const [firstName, setFirstName] = useState("_firstName")
    const [lastName, setLastName] = useState("_lastName")
    const [balance, setBalance] = useState(420.69)

    const [confirmLogout, setConfirmLogout] = useState(false)

    return (
            <ImageBackground
                source={loginBackground}
                style={{flex: 1}}
                resizeMode='stretch'
            >
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <Text style={{textAlignVertical: 'center',
                        marginHorizontal: '12%',
                        fontFamily: 'Kanit-Medium',
                        fontSize: 24}}
                    >
                        โปรไฟล์
                    </Text>
                </View>

                <View style={{flex: 11, backgroundColor: 'white'}}>
                    <TouchableOpacity
                        style={{flex: 3,
                            flexDirection: 'row',
                            marginHorizontal: '10%'
                        }}
                        onPress={()=>{navigation.navigate("EditProfileScreen")}}
                    >
                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Image
                                source={testImg}
                                style={{flex: 1,
                                    aspectRatio: 1,
                                    margin: '5%',
                                    borderRadius: 1000
                                }}
                            />
                        </View>
                        <View style={{flex: 9, justifyContent: 'center'}}>
                            <Text style={{textAlign: 'center',
                                textAlignVertical: 'center',
                                fontFamily: 'Kanit-Light',
                                fontSize: 24}}
                            >
                                {firstName}{'\n'}{lastName}
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Icon
                                name={'chevron-right'}
                                size={30}
                                style={{alignSelf: 'center'}}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{flex: 3}}>
                        <View style={{flex: 1,
                            width: "80%",
                            alignSelf: 'center',
                            padding: 7,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            backgroundColor: 'white'}}
                        >
                            <Text style={{flex: 3, fontFamily: 'Kanit-Light'}}>
                                จำนวนเงินคงเหลือ
                            </Text>
                            <Text style={{flex: 5,
                                textAlign: 'right',
                                textAlignVertical: 'bottom',
                                fontFamily: 'Kanit-Light',
                                fontSize: 28}}
                            >
                                {balance} บาท
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={()=>{navigation.navigate("TopUpScreen")}}
                        >
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={"currency-usd-circle-outline"} size={50}/>
                            </View>
                            <View>
                                <Text style={{textAlign: 'center',
                                    fontFamily: 'Kanit-Light',
                                    fontSize: 16}}
                                >
                                    เติมเงิน
                                </Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={()=>{navigation.navigate("TopUpHistoryScreen")}}
                        >
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={"history"} size={50}/>
                            </View>
                            <View>
                                <Text style={{textAlign: 'center',
                                    fontFamily: 'Kanit-Light',
                                    fontSize: 16}}
                                >
                                    ประวัติการเติมเงิน
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}}>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={"book-search-outline"} size={50}/>
                            </View>
                            <View>
                                <Text style={{textAlign: 'center',
                                    fontFamily: 'Kanit-Light',
                                    fontSize: 16}}
                                >
                                    ประวัติการใช้บริการ
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 11}}>
                        <ListItem
                            text='สัตว์เลี้ยง'
                        />
                        <ListItem
                            text='ตั้งค่าภาษา'
                        />
                        <ListItem
                            text='ติดต่อเรา'
                            onPress={()=>{navigation.navigate("ContactUsScreen")}}
                        />
                        <ListItem
                            text='เกี่ยวกับเรา'
                            onPress={()=>{navigation.navigate("AboutUsScreen")}}
                        />
                        <ListItem
                            text='เปลี่ยนรหัสผ่าน'
                            onPress={()=>{navigation.navigate("ChangePasswordScreen")}}
                        />
                        <ListItem
                            text='ออกจากระบบ'
                            onPress={()=>{setConfirmLogout(true)}}
                        />
                    </View>
                </View>
                <Modal
                    transparent={true}
                    visible={confirmLogout}
                    animationType={'fade'}
                >
                    <View style={{flex: 1,
                        width: '100%',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000000aa'}}
                    >
                    <View style={{width: '80%',
                        height: '15%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 15,
                        padding: 15,
                        backgroundColor: 'white'}}
                    >
                        <View style={{flex: 1}}>
                            <Text style={{
                                fontFamily: 'Kanit-Medium',
                                fontSize: 16
                            }}>
                                คุณต้องการจะออกจากระบบหรือไม่
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        setConfirmLogout(false),
                                        navigation.popToTop()
                                    }}
                                >
                                    <Text style={{
                                        textAlign: 'right',
                                        paddingHorizontal: 20,
                                        fontFamily: 'Kanit-Medium',
                                        fontSize: 16,
                                        color: color.sopetDarkBrown
                                    }}>
                                        ใช่
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>{
                                        setConfirmLogout(false)
                                    }}
                                >
                                    <Text style={{
                                        textAlign: 'right',
                                        paddingHorizontal: 20,
                                        fontFamily: 'Kanit-Medium',
                                        fontSize: 16,
                                        color: color.sopetDarkBrown
                                    }}>
                                        ไม่
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </View>
                </Modal>
                
            </ImageBackground>
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
    containerHeader: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: '5%',
        paddingTop: device.iPhoneNotch ? 60 : 36,
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