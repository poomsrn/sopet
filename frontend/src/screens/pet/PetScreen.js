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

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FlatGrid } from 'react-native-super-grid';


import color from '../../constants/color';

import NavBar from '../../components/NavBar';
import PetBox from '../../components/PetBox';
import EditBox from '../../components/EditBox';
import SopetButton from '../../components/SopetButton';
import DateToString from '../../components/Function/DateToString';

import sunSlip from '../../assets/images/sunSlip.png';
import testImg from '../../assets/images/testImg.png';
import facebookLogo from '../../assets/images/facebook.png';
import primaryLogo from '../../assets/images/primaryLogo.png';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default function PetScreen({ navigation }) {

    return (
            <SafeAreaView style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <NavBar
                        title='สัตว์เลี้ยง'
                        navigation={navigation}
                    />
                </View>
                
                    <View style={styles.tasksWrapper}>
                            <ScrollView>
                            <PetBox text={'text 1'}/>
                            <PetBox text={'text 2'}/>
                            <PetBox text={'text 3'}/>
                            </ScrollView>
                    </View>
               
                
                    <View style={{backgroundColor: color.sopetLightBrown}}>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'flex-end', padding: 15}} onPress={()=>{navigation.navigate("EditPetScreen")}}>
                                    <Icon
                                        name="add-circle"
                                        color={color.sopetDarkBrown}
                                        size={60}
                                    />
                        </TouchableOpacity>
                    </View>
                    
                </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: color.white,
    },
    tasksWrapper: {
        flex: 10,
        paddingHorizontal: 20, 
        backgroundColor: color.sopetLightBrown,
    },
    items: {
    },


});