import React, { useState } from 'react'
import {
    Dimensions,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import color from '../../constants/color';
import NavBar from '../../components/NavBar';

import testImg from '../../assets/images/testImg.png'

import VetDetailScreen from './VetDetailScreen';
import VetReviewScreen from './VetReviewScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function VetProfileScreen({ navigation }) {

    let _tmpStarCount = 1;

    // const [activeContent, setActiveContent] = useState("info")
    const [activeContent, setActiveContent] = useState("review")

    const [vetInfo, setVetInfo] = useState({
        fullName: 'บรูซ เวย์น',
        license: 123456789123,
        pets: [
            "ค้างคาว",
            "แมว",
            "เพนกวิน",
            "จระเข้",
            "ต้นไม้กินคน",
            "ไก่",
            "สุนัข",
            "นก",
        ],
        specialty: [
            "ผิวหนัง",
            "ฉุกเฉิน",
            "อุบัติเหตุ",
            "อายุรกรรมทั่วไป",
            "ช่องปากและฟัน",
        ],
        education: 'Chulalongkorn University, Gotham University',
        experience: 'สภากาชาดไทย'
    })

    const [vetReview, setVetReview] = useState(
        {
            overallScore: 3.1, 
            totalEachScore: [4, 2, 2, 0, 1],
            totalReview: 9,
            reviewList: [
                {
                    fullName: "สตีฟ โรเจอร์",
                    reviewText: "I can do this ALL DAY",
                    reviewScore: 3
                }, {
                    fullName: "ปีเตอร์ ปาร์เกอร์",
                    reviewText: "I'd Rather Just Stay On The Ground For A Little While. Friendly Neighborhood Spider-Man.",
                    reviewScore: 4
                }, {
                    fullName: "ทานอส ยอดมันม่วง",
                    reviewText: "Fine, I'll do it my self, I Am The Inevitable, I don't even know you",
                    reviewScore: 5
                }, {
                    fullName: "สเตรนจ์ สตีเฟนสัน",
                    reviewText: "Dormammu, I've come to bargain.",
                    reviewScore: 4
                }, {
                    fullName: "โทนี สตาร์ค",
                    reviewText: 'I Am Ironman',
                    reviewScore: 5
                }, {
                    fullName: "กรูท",
                    reviewText: 'I Am Groot',
                    reviewScore: 3
                }, {
                    fullName: "ธอร์ โอดินสัน",
                    reviewText: "This is my friend, Tree",
                    reviewScore: 1
                }, {
                    fullName: "มอร์แกน สตาร์ค",
                    reviewText: "I love you 3000",
                    reviewScore: 5
                }, {
                    fullName: "ร็อคเก็ต",
                    reviewText: "How much for that gun?. How about the arm?",
                    reviewScore: 5
                },
            ],
        },
    )

    

    return (
            <SafeAreaView style={{flex: 1, backgroundColor: color.sopetLightBrown}}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: color.sopetMediumBrown}}>
                    <NavBar
                        title='ประวัติสัตวแพทย์'
                        navigation={navigation}
                    />
                </View>
                <View style={{flex: 12, backgroundColor: color.sopetLightBrown}}>
                    <View style={{flex: 7, alignItems: 'center', justifyContent: 'center', padding: '2%'}}>
                        <View style={{flex: 1, aspectRatio: 1}}>
                            <Image
                                source={testImg}
                                style={{flex: 1, aspectRatio: 1, borderRadius: 1000}}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', marginHorizontal: '5%'}}>
                        <Pressable
                            style={[styles.folderHeader, {
                                marginTop: activeContent == "info" ?
                                    null : '1%',
                                backgroundColor: activeContent == "info" ?
                                    color.sopetMediumBrown : '#EFD8C8'
                                }]}
                            onPress={()=>{setActiveContent("info")}}
                        >
                            <Text style={{fontFamily: 'Kanit-Light', fontSize: 18}}>
                                ข้อมูล
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[styles.folderHeader, {
                                marginTop: activeContent == "review" ?
                                    null : '1%',
                                backgroundColor: activeContent == "review" ?
                                    color.sopetMediumBrown : '#EFD8C8'
                            }]}
                            onPress={()=>{setActiveContent("review")}}
                        >
                            <Text style={{fontFamily: 'Kanit-Light', fontSize: 18}}>
                                รีวิว
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{flex: 14}}>
                        <ScrollView
                            style={{flex: 1, marginHorizontal: '5%', backgroundColor: color.sopetMediumBrown}}
                            contentContainerStyle={{flexGrow: 1, backgroundColor: color.sopetMediumBrown}}
                        >
                            {
                                (activeContent == "info") && (
                                    <VetDetailScreen
                                        fullName={vetInfo.fullName}
                                        license={vetInfo.license}
                                        pets={vetInfo.pets}
                                        specialty={vetInfo.specialty}
                                        education={vetInfo.education}
                                        experience={vetInfo.experience}
                                    />
                                )
                            }
                            {
                                (activeContent == "review") && (
                                    <VetReviewScreen
                                        vetReview={vetReview}
                                    />
                                )
                            }
                        </ScrollView>
                    </View>
                </View>

            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    folderHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "lime"
    },
  });