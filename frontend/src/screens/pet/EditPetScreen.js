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
import { FlatGrid } from 'react-native-super-grid';

// import Constants from 'expo-constants'

import color from '../../constants/color';

import NavBar from '../../components/NavBar';
import EditBox from '../../components/EditBox';
import SopetButton from '../../components/SopetButton';

import sunSlip from '../../assets/images/sunSlip.png';
import testImg from '../../assets/images/testImg.png';
import facebookLogo from '../../assets/images/facebook.png';
import primaryLogo from '../../assets/images/primaryLogo.png';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



export default function EditPetScreen({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [showUpload, setShowUpload] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setBirthdate(currentDate);
    };

    const [inputPetInfo, setInputPetInfo] = useState({
      petPictureUrl: "",
      name: "",
      gender: "",
      kind: "",
      species: "",
      favActivity: "",
      age: "",
      weight: "",
      congenitalDisease: "",
      physicalLimitation: "",
      microchip: "",
      petCare: "",
      favFood: "",
      amountOfFood: "",
      foodTime: "",
      other: "",
  })

    const [petInfo, setPetInfo] = useState({
        petPictureUrl: facebookLogo,
        name: 'ปั้น',
        gender: 'ไม่ระบุ',
        kind: "สุนัข",
        species: "ชิวาว่า",
        favActivity: 'กระโดดหมุนตัว',
        age: '3 years',
        weight: '77 kg',
        congenitalDisease: 'ไม่มี',
        physicalLimitation: 'ตาบอดข้างซ้าย',
        microchip: 'ไม่มี',
        petCare: 'เลี้ยงนอกบ้าน',
        favFood: 'me-o',
        amountOfFood: "2 จาน",
        foodTime: "ตอนหิว",
        other: "ระวังหมาดุ",
    })

    const [confirmUpdate, setConfirmUpdate] = useState(false);

    // const [petPictureUrl, setPetPictureUrl] = useState(testImg)
    // const [name, setName] = useState("") 
    // const [gender, setGender] = useState("")
    // const [kind, setKind] = useState("")
    // const [species, setSpecies] = useState("")
    // const [favActivity, setFavActivity] = useState("")
    // const [age, setAge] = useState("")
    // const [weight, setWeight] = useState("")
    // const [congenitalDisease, setCongenitalDisease] = useState("")
    // const [physicalLimitation, setPhysicalLimitation] = useState("")
    // const [microchip, setMicrochip] = useState("")
    // const [petCare, setPetCare] = useState("")
    // const [favFood, setFavFood] = useState("")
    // const [amountOfFood, setamountOfFood] = useState("")
    // const [foodTim, setFoodTim] = useState("")
    // const [other, setOther] = useState("")

    const [gallery, setGallery] = useState([
        {img: sunSlip},
        {img: facebookLogo},
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
            <SafeAreaView style={{flex: 1, backgroundColor: 'sopetLightBrown'}}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <NavBar
                        title='ข้อมูลสัตว์เลี้ยง'
                        navigation={navigation}
                    />
                </View>

                <View style={{flex: 2, flexDirection: 'row', alignItems: 'flex-start' , backgroundColor: color.sopetLightBrown}}>
                    <View style={{flex: 2}}/>
                    
                    
                    <TouchableOpacity
                        style={{flex: 1, alignItems: 'center'}}
                        onPress={()=>{setShowUpload(true)}}
                    >
                        <Image
                            source={petInfo.petPictureUrl}
                            style={{flex: 1,
                                aspectRatio: 1,
                                margin: '10%',
                                borderRadius: 1000,
                                borderWidth: 1
                            }}
                        />
                    </TouchableOpacity>
                    
                    <View style={{flex: 1, height: '100%', justifyContent: 'flex-end'}}>
                        <Icon
                            name="camera-plus"
                            size={20}
                            style={{position: 'relative', right: 10}}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={()=>{setIsEditable(true)}}>
                            <Text style={{fontFamily: 'Kanit-Medium', textDecorationLine: 'underline', textAlign: 'right', fontSize: 16, marginRight: '25%'}}>
                                edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex: 10, backgroundColor: color.sopetLightBrown}}>
                    <ScrollView
                        style={{marginHorizontal: '5%', alignContent: 'center'}}
                        contentContainerStyle={{paddingBottom: '5%'}}
                    >
                        <Text style={{fontFamily: 'Kanit-Medium'}}>
                            ข้อมูลเบื้องต้น
                        </Text>
                        <EditBox
                            itemName="ชื่อ"
                            defaultValue={petInfo.name}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, name: text})}
                        />
                        <EditBox
                            itemName="เพศ"
                            defaultValue={petInfo.gender}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, gender: text})}
                        />
                        <EditBox
                            itemName="ประเภท"
                            defaultValue={petInfo.kind}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, kind: text})}
                        />
                        <EditBox
                            itemName="สายพันธุ์"
                            defaultValue={petInfo.species}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, species: text})}
                        />
                        <EditBox
                            itemName="กิจกรรมโปรด"
                            defaultValue={petInfo.favActivity}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, favActivity: text})}
                        />
                        <Text style={{fontFamily: 'Kanit-Medium'}}>
                            ข้อมูลสุขภาพ
                        </Text>
                        <EditBox
                            itemName="อายุ"
                            defaultValue={petInfo.age}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, age: text})}
                        />
                        <EditBox
                            itemName="น้ำหนัก"
                            defaultValue={petInfo.weight}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, weight: text})}
                        />
                        <EditBox
                            itemName="โรคประจำตัว"
                            defaultValue={petInfo.congenitalDisease}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, congenitalDisease: text})}
                        />
                        <EditBox
                            itemName="ข้อจำกัดทางกายภาพ"
                            defaultValue={petInfo.physicalLimitation}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, physicalLimitation: text})}
                        />
                        <EditBox
                            itemName="ไมโครชิพ"
                            defaultValue={petInfo.microchip}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, microchi: text})}
                        />
                        <EditBox
                            itemName="ลักษณะการเลี้ยงดู"
                            defaultValue={petInfo.petCare}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, petCare: text})}
                        />
                        <Text style={{fontFamily: 'Kanit-Medium'}}>
                            อาหารและอื่นๆ
                        </Text>
                        <EditBox
                            itemName="อาหารโปรด"
                            defaultValue={petInfo.favFood}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, favFood: text})}
                        />
                        <EditBox
                            itemName="ปริมาณอาหาร"
                            defaultValue={petInfo.amountOfFood}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, amountOfFood: text})}
                        />
                        <EditBox
                            itemName="ช่วงเวลาอาหาร"
                            defaultValue={petInfo.foodTime}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, foodTime: text})}
                        />
                        <EditBox
                            itemName="อื่นๆ"
                            defaultValue={petInfo.other}
                            editable={isEditable}
                            onChangeText={(text) => setInputPetInfo({...inputPetInfo, other: text})}
                        />                                      
                        
                        <View style={{alignItems: 'center'}}>
                            {!show && (
                                <SopetButton
                                    text="บันทึก"
                                    onPress={()=>{
                                    setPetInfo({
                                        petPictureUrl: inputPetInfo.petPictureUrl? inputPetInfo.petPictureUrl : petInfo.petPictureUrl,
                                        name: inputPetInfo.name ? inputPetInfo.name : petInfo.name,
                                        gender: inputPetInfo.gender ? inputPetInfo.gender : petInfo.gender,
                                        kind: inputPetInfo.kind ? inputPetInfo.kind : petInfo.kind,
                                        species: inputPetInfo.species ? inputPetInfo.species : petInfo.species,
                                        favActivity: inputPetInfo.favActivity ? inputPetInfo.favActivity : petInfo.favActivity,
                                        age: inputPetInfo.age ? inputPetInfo.age : petInfo.age,
                                        weight: inputPetInfo.weight ? inputPetInfo.weight : petInfo.weight,
                                        congenitalDisease: inputPetInfo.congenitalDisease ? inputPetInfo.congenitalDisease : petInfo.congenitalDisease,
                                        physicalLimitation: inputPetInfo.physicalLimitation ? inputPetInfo.physicalLimitation : petInfo.physicalLimitation,
                                        microchip: inputPetInfo.microchip ? inputPetInfo.microchip : petInfo.microchip,
                                        petCare: inputPetInfo.petCare ? inputPetInfo.petCare : petInfo.petCare,
                                        favFood: inputPetInfo.favFood ? inputPetInfo.favFood : petInfo.favFood,
                                        amountOfFood: inputPetInfo.amountOfFood ? inputPetInfo.amountOfFood : petInfo.amountOfFood,
                                        foodTime: inputPetInfo.foodTime ? inputPetInfo.foodTime : petInfo.foodTime,
                                        other: inputPetInfo.other ? inputPetInfo.other : petInfo.other,
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
                                        setConfirmUpdate(false)
                                        setIsEditable(false)
                                        navigation.navigate("PetScreen")
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

                {/* Upload Profile Picture From Gallery */}
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
                                data={gallery}
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