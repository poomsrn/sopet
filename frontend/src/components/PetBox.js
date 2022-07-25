import React from 'react'
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import testImg from '../assets/images/testImg.png';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PetBox = (props) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: '2%', borderColor: 'black', borderRadius: 10, borderWidth: 1}}>
      <View style={{flexDirection: 'column',  padding: 5, borderColor: 'black', borderRightWidth: 1, marginRight: '5%'}}>
        <Image source={testImg} style={{width: 0.3*WIDTH, height: 0.3*WIDTH, borderRadius: 10}} />
      </View>
      <View style={{flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
        <Text style={styles.textInfo}> ชื่อ: {props.text} </Text>
        <Text style={styles.textInfo}>สายพันธู์: {props.text}</Text>
        <Text style={styles.textInfo}>เพศ: {props.text}</Text>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  item: {
      flex: 1,  
      alignItems: 'center',
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white'
  },
  textInfo: {
      fontSize: 15,
      textAlign: 'left' , 
      margin: '5%'
  },
});

export default PetBox;
