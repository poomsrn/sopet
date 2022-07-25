import React, { useState } from 'react'
import {
    Dimensions,
    Image,
    Modal,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FlatGrid } from 'react-native-super-grid';


import color from '../../constants/color';
import NavBar from '../../components/NavBar';

import sunSlip from '../../assets/images/sunSlip.png';
import testImg from '../../assets/images/testImg.png';
import primaryLogo from '../../assets/images/primaryLogo.png';

import SopetButton from '../../components/SopetButton';
import DateToString from '../../components/Function/DateToString';

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
                    defaultValue={props.defaultValue}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoCompleteType={'off'}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                    onTouchStart={props.onTouchStart}
                    editable={props.editable}
                    showSoftInputOnFocus={props.showSoftInputOnFocus} 
                />
            </View>
        </View>
    )
}


const DateBox = (props) => {
    return (
        <View style={{flexDirection: 'row', marginVertical: '2%'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Kanit-Light'}}>
                    {props.itemName}
                </Text>
            </View>
            <Pressable style={{flex: 3}} onPress={props.onPress}>
                <View style={styles.dateBox}>
                    <Text style={{textAlignVertical: 'center', fontFamily: 'Kanit-Light',}}>
                        {props.text}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default function EditProfileScreen({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [showUpload, setShowUpload] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setBirthdate(currentDate);
    };

    const [profileInfo, setProfileInfo] = useState({
        profilePictureUrl: testImg,
        firstnameTH: 'โทนี่',
        lastnameTH: 'สตาร์ค',
        firstnameEN: "Tony",
        lastnameEN: "Stark",
        address: 'Malibu Point 10880, 90265',
        subdistrict: 'Malibu Point',
        district: 'Malibu',
        province: 'California',
        postcode: '10880',
        country: 'America',
        phone: '1234567890',
        email: 'askJarvis@tony.co',
        birthdate: "3 Jan 46",
    })

    const [confirmUpdate, setConfirmUpdate] = useState(false);

    const [profilePictureUrl, setProfilePictureUrl] = useState(testImg)
    const [firstnameTH, setFirstNameTH] = useState("")
    const [lastnameTH, setLastNameTH] = useState("")
    const [firstnameEN, setFirstNameEN] = useState("")
    const [lastnameEN, setLastNameEN] = useState("")
    const [address, setAddress] = useState("")
    const [subdistrict, setSubdistrict] = useState("")
    const [district, setDistrict] = useState("")
    const [province, setProvince] = useState("")
    const [postcode, setPostcode] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [birthdate, setBirthdate] = useState("")

    const [gallary, setGallary] = useState([
        {img: sunSlip},
        {img: testImg},
        {img: primaryLogo},
        {img: sunSlip},
        {img: testImg},
        {img: sunSlip},
        {img: testImg},
        {img: primaryLogo},
        {img: sunSlip},
        {img: testImg},
    ])

    return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <NavBar
                        title='แก้ไขโปรไฟล์'
                        navigation={navigation}
                    />
                </View>

                <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity
                        style={{flex: 1, alignItems: 'center'}}
                        onPress={()=>{setShowUpload(true)}}
                    >
                        <Image
                            source={profilePictureUrl}
                            style={{flex: 1,
                                aspectRatio: 1,
                                margin: '3%',
                                borderRadius: 1000,
                                borderWidth: 1
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{flex: 1, height: '100%', justifyContent: 'flex-end'}}>
                        <Icon
                            name="camera-plus"
                            size={20}
                            style={{position: 'relative', right: 30}}
                        />
                    </View>
                </View>

                <View style={{flex: 10}}>
                    <ScrollView
                        style={{marginHorizontal: '5%', alignContent: 'center'}}
                        contentContainerStyle={{paddingBottom: '5%'}}
                    >
                        <Text style={{fontFamily: 'Kanit-Medium'}}>
                            ข้อมูลส่วนตัว
                        </Text>
                        <EditBox
                            itemName="ชื่อ"
                            defaultValue={profileInfo.firstnameTH}
                            onChangeText={(text) => setFirstNameTH(text)}
                        />
                        <EditBox
                            itemName="นามสกุล"
                            defaultValue={profileInfo.lastnameTH}
                            onChangeText={(text) => setLastNameTH(text)}
                        />
                        <EditBox
                            itemName="ชื่อ(Eng)"
                            defaultValue={profileInfo.firstnameEN}
                            onChangeText={(text) => setFirstNameEN(text)}
                        />
                        <EditBox
                            itemName="นามสกุล(Eng)"
                            defaultValue={profileInfo.lastnameEN}
                            onChangeText={(text) => setLastNameEN(text)}
                        />
                        <EditBox
                            itemName="โทรศัพท์"
                            defaultValue={profileInfo.phone}
                            onChangeText={(text) => setPhone(text)}
                            keyboardType={"phone-pad"}
                        />
                        <EditBox
                            itemName="อีเมล"
                            defaultValue={profileInfo.email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType={"email-address"}
                        />
                        <DateBox
                            itemName="ว/ด/ป"
                            text={
                                DateToString(date)
                            }
                            onPress={()=>{setShow(!show)}}
                        />
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={"date"}
                                is24Hour={true}
                                display="spinner"
                                onChange={onChange}
                            />
                        )}
                        {show && (
                            <View style={{alignItems: 'center'}}>
                                <SopetButton
                                    text="ตกลง"
                                    onPress={()=>{setShow(false)}}
                                />
                            </View>
                        )}
                        <Text style={{fontFamily: 'Kanit-Medium'}}>
                            ที่อยู่
                        </Text>
                        <EditBox
                            itemName="บ้านเลขที่"
                            defaultValue={profileInfo.address}
                            onChangeText={(text) => setAddress(text)}
                        />
                        <EditBox
                            itemName="ตำบล"
                            defaultValue={profileInfo.subdistrict}
                            onChangeText={(text) => setSubdistrict(text)}
                        />
                        <EditBox
                            itemName="อำเภอ"
                            defaultValue={profileInfo.district}
                            onChangeText={(text) => setDistrict(text)}
                        />
                        <EditBox
                            itemName="จังหวัด"
                            defaultValue={profileInfo.province}
                            onChangeText={(text) => setProvince(text)}
                        />
                        <EditBox
                            itemName="รหัสไปรษณีย์"
                            defaultValue={profileInfo.postcode}
                            onChangeText={(text) => setPostcode(text)}
                            keyboardType={"numeric"}
                        />
                        <EditBox
                            itemName="ประเทศ"
                            defaultValue={profileInfo.country}
                            onChangeText={(text) => setCountry(text)}
                        />
                        
                        <View style={{alignItems: 'center'}}>
                            {!show && (
                                <SopetButton
                                    text="บันทึก"
                                    onPress={()=>{setProfileInfo({
                                        profilePictureUrl: profilePictureUrl ? profilePictureUrl : profileInfo.profilePictureUrl,
                                        firstnameTH: firstnameTH ? firstnameTH : profileInfo.firstnameTH,
                                        lastnameTH: lastnameTH ? lastnameTH : profileInfo.lastnameTH,
                                        firstnameEN: firstnameEN ? firstnameEN : profileInfo.firstnameEN,
                                        lastnameEN: lastnameEN ? lastnameEN : profileInfo.lastnameEN,
                                        address: address ? address : profileInfo.address,
                                        subdistrict: subdistrict ? subdistrict : profileInfo.subdistrict,
                                        district: district ? district : profileInfo.district,
                                        province: province ? province : profileInfo.province,
                                        postcode: postcode ? postcode : profileInfo.postcode,
                                        country: country ? country : profileInfo.country,
                                        phone: phone ? phone : profileInfo.phone,
                                        email: email ? email : profileInfo.email,
                                        birthdate: birthdate ? birthdate : profileInfo.birthdate,
                                    }),
                                    setConfirmUpdate(true)
                                    }}
                                />
                            )}
                        </View>
                        
                    </ScrollView>
                </View>
               
               {/* Alert Profile Updated */}
                <Modal
                    transparent={true}
                    visible={confirmUpdate}
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
                                อัพเดตโปรไฟล์เรียบร้อย
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        setConfirmUpdate(false),
                                        navigation.pop()
                                    }}
                                >
                                    <Text style={{
                                        textAlign: 'right',
                                        paddingHorizontal: 20,
                                        fontFamily: 'Kanit-Medium',
                                        fontSize: 16,
                                        color: color.sopetDarkBrown
                                    }}>
                                        ตกลง
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </View>
                </Modal>

                {/* Upload Profile Picture From Gallary */}
                <Modal
                    transparent={true}
                    visible={showUpload}
                    animationType={'fade'}
                >
                    <View style={{flex: 1,
                        width: '100%',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000000aa'}}
                    >
                    <View style={{width: '80%',
                        height: '80%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 15,
                        padding: 15,
                        backgroundColor: 'white'}}
                    >
                        <View style={{flexShrink: 1}}>
                            <Text style={{
                                fontFamily: 'Kanit-Medium',
                                fontSize: 16
                            }}>
                                เลือกรูปภาพ
                            </Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <FlatGrid
                                itemDimension={WIDTH * 0.2}
                                data={gallary}
                                style={{marginTop: 10, flex: 1}}
                                spacing={2}
                                renderItem={ ({item}) => (
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            aspectRatio: 1,
                                            alignItems: 'center'
                                        }}
                                        onPress={()=>{
                                            // setSlipAdded(true),
                                            setShowUpload(false),
                                            setProfilePictureUrl(item.img)
                                        }}
                                    >
                                        <Image
                                            source={item.img ? item.img : primaryLogo}
                                            style={{
                                                flex: 1,
                                                aspectRatio: 1,
                                            }}
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                            <SopetButton
                                text="ปิด"
                                onPress={()=>{
                                    setShowUpload(false)
                                }}
                            />
                        </View>
                    </View>
                    </View>
                </Modal>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Kanit-Light',
        paddingHorizontal: '3%',
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    dateBox: {
        flex: 3,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: '3%',
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
});