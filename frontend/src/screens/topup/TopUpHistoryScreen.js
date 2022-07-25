import React, { useState } from 'react'
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import color from '../../constants/color';
import NavBar from '../../components/NavBar';

import primaryLogo from '../../assets/images/primaryLogo.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CheckString = (tmp) => {
    return tmp < 10 ? "0" + tmp : tmp
}

const createVerticalBox = (TopUpHistory) => {
    return (
        TopUpHistory.map((e) => {
            return (
                <TouchableOpacity style={styles.historyItem}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Kanit-Medium'}}>
                                รายการโอน
                            </Text>
                            <Text style={{fontFamily: 'Kanit-Light', color: e.isDeposit ? "green" : "red"}}>
                                {e.isDeposit ? "+" : "-"}{e.amount} บาท
                            </Text>
                            <Text style={{fontFamily: 'Kanit-Light'}}>
                                {CheckString(e.date[2])}/{CheckString(e.date[1])}/{CheckString(e.date[0])} {CheckString(e.date[3])}:{CheckString(e.date[4])}
                            </Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Image source={primaryLogo} resizeMode='contain' style={{flex: 1}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    )
}

export default function TopUpHistoryScreen({ navigation }) {

    const [TopUpHistory, setTopUpHistory] = useState([
        {   
            isDeposit: true,
            amount: 500,
            date: [2022, 10, 9, 23, 59]
        },
        {   
            isDeposit: false,
            amount: 66,
            date: [2021, 2, 9, 9, 8]
        },
        {   
            isDeposit: true,
            amount: 420,
            date: [2020, 1, 9, 1, 59]
        },
    ])

    return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <NavBar
                        title='ประวัติการชำระเงิน'
                        navigation={navigation}
                    />
                </View>
                <View style={{flex: 12, backgroundColor: 'white'}}>
                    <ScrollView
                        style={{marginHorizontal: '5%', alignContent: 'center'}}
                        contentContainerStyle={{paddingBottom: '5%'}}
                    >
                        {createVerticalBox(TopUpHistory)}
                    </ScrollView>
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
    historyItem: {
        height: 120,
        justifyContent: 'center',
        padding: '5%',
        marginVertical: '5%',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: color.sopetLightBrown,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 6,
    }
  });