import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ReviewBar = (props) => {
    return (
        <View key={props.point} style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Kanit-Light'}}>
                    {props.point}
                </Text>
            </View>
            <View style={{flex: 7, justifyContent: 'center', paddingHorizontal: '3%'}}>
                <Progress.Bar
                    progress={props.progress}
                    color={'#34A853'}
                    unfilledColor={"white"}
                    borderWidth={0}
                    width={null}
                    height={12}
                    borderRadius={5}
                />
            </View>
        </View>
    )
}

const ReviewBox = (props) => {
    return (
        <View style={styles.contactItem}>
            <View style={{flex: 7}}>
                <Text style={{fontFamily: 'Kanit-Medium'}}>
                    {props.fullName}
                </Text>
                <Text style={{fontFamily: 'Kanit-Light'}}>
                    {props.reviewText}
                </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{fontFamily: 'Kanit-Light'}}>
                    {parseFloat(props.reviewScore).toFixed(1)}
                </Text>
                <Icon
                    name={"star"}
                    size={20}
                    color={"#34A853"}
                />
            </View>
        </View>
    )
}

const CalTotalReviewScore = (reviewList) => {

    var _overallScore = 0;
    var _reviewList = reviewList;
    
    _reviewList.map((e) => {
        _overallScore += e.reviewScore;
    })

    return parseFloat(_overallScore / _reviewList.length).toFixed(1);
}

const CreateStar = (overallScore) => {
    var _tmpView = []
    for (var i = 0; i < 5; i++) {
        _tmpView.push(
            <View key={i}>
                <Icon
                    name={"star"}
                    size={30}
                    color={Math.floor(overallScore) > i ? "#34A853" : "white"}
                />
            </View>
        )
    }

    return _tmpView
}

const VetReviewScreen = (props) => {

    const vetReview = props.vetReview

    let _tmpStarCount = 5;
    // let _overallScore = 0;

    // const [overallScore, setOverallScore] = useState(0);

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 4, justifyContent: 'center'}}>
                    <View style={{flexShrink: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Kanit-Light', fontSize: 48}}>
                            {CalTotalReviewScore(vetReview.reviewList)}
                            {/* {parseFloat(_overallScore / vetReview.totalReview).toFixed(1)} */}
                        </Text>
                    </View>
                    <View style={{flexShrink: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        {CreateStar(vetReview.overallScore)}
                    </View>
                </View>
                <View style={{flex: 5}}>
                    {
                        vetReview.totalEachScore.map((e) => {
                            let _star = _tmpStarCount;
                            _tmpStarCount--;

                            // _overallScore += (e * _star);

                            // console.log(_overallScore);
                            // if (_star == 1) {
                            //     setOverallScore(_overallScore)
                            // }
                            return (
                                <ReviewBar
                                    point={_star}
                                    progress={e / vetReview.totalReview}
                                />
                            )
                        })
                    }
                </View>
            </View>
            <View style={{flex: 8}}>
                {vetReview.reviewList.map((e) => {
                    return (
                        <ReviewBox
                            fullName={e.fullName}
                            reviewText={e.reviewText}
                            reviewScore={e.reviewScore}
                        />
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contactItem: {
        flexShrink: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '3%',
        marginVertical: '2%',
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

export default VetReviewScreen;