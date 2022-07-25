import React from 'react'
import {
    Dimensions,
    Text,
    View,
} from 'react-native';

import color from '../../constants/color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const InfoBox = (props) => {
    return (
        <View key={props} style={{flexShrink: 1, marginHorizontal: '5%', marginVertical: '3%'}}>
            <View style={{flexShrink: 1}}>
                <Text style={{fontFamily: 'Kanit-Light', fontSize: 18}}>
                    {props.title}
                </Text>
            </View>
            <View
                style={{
                    flexGrow: 1,
                    paddingHorizontal: '2%',
                    borderRadius: 5,
                    backgroundColor: 'white'
                }}
            >
                <Text style={{fontFamily: 'Kanit-Light', fontSize: 18}}>
                    {props.detail}
                </Text>
            </View>
        </View>
    )
}

const TagBox = (props) => {
    return (
        <View key={props} style={{flexGrow: 1, marginHorizontal: '5%', marginVertical: '3%'}}>
            <View style={{flexShrink: 1}}>
                <Text style={{fontFamily: 'Kanit-Light', fontSize: 18}}>
                    {props.title}
                </Text>
            </View>
            <View
                style={{
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    borderRadius: 5,
                }}
            >
                {props.tagList.map((e) => {
                    return (
                        <View
                            key={e}
                            style={{
                                paddingHorizontal: '3%',
                                marginRight: '2%',
                                marginVertical: '2%',
                                borderRadius: 5,
                                backgroundColor: color.sopetDarkBrown
                            }}
                        >
                            <Text style={{fontFamily: 'Kanit-Light', fontSize: 18, color: 'white'}}>
                                {e}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const VetDetailScreen = (props) => {

    return (
        <View style={{flex: 1}}>
            <InfoBox
                title="ชื่อ"
                detail={props.fullName}
            />
            <InfoBox
                title="เลขที่ใบประกอบวิชาชีพ"
                detail={props.license}
            />
            <TagBox
                title="ประเภทสัตว์"
                tagList={props.pets}
            />
            <TagBox
                title="กลุ่มอาการ"
                tagList={props.specialty}
            />
            <InfoBox
                title="ประวัติการศึกษา"
                detail={props.education}
            />
            <InfoBox
                title="ประวัติการทำงาน"
                detail={props.experience}
            />
        </View>
    );
}

export default VetDetailScreen;