import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
  });

export default EditBox;