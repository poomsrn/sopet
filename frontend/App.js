import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

// import { Provider } from 'react-redux'
// import {createStore, applyMiddleware } from 'redux'
// import rootReducer from './redux/reducers'
// import thunk from 'redux-thunk'

import color from './src/constants/color';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import NavBar from './src/components/NavBar'
import SopetButton from './src/components/SopetButton';

// function component
import DateToString from './src/components/Function/DateToString';
import TimeToString from './src/components/Function/TimeToString';

// Screen Compenents
import VetDetailScreen from './src/screens/vet/VetDetailScreen';
import VetReviewScreen from './src/screens/vet/VetReviewScreen';

// Screens
import TestScreen from './src/screens/TestScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import HomeScreen from './src/screens/MainScreen';
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/user/ProfileScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import EditProfileScreen from './src/screens/user/EditProfileScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import SelectVetScreen from './src/screens/SelectVetScreen';
import TopUpScreen from './src/screens/topup/TopUpScreen';
import TopUpHistoryScreen from './src/screens/topup/TopUpHistoryScreen';
import VetProfileScreen from './src/screens/vet/VetProfileScreen';
import EditPetScreen from './src/screens/pet/EditPetScreen';
import PetScreen from './src/screens/pet/PetScreen';

// const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator();

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        loaded: false,
        assetsLoaded: false,
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
        'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Light': require('./src/assets/fonts/Roboto/Roboto-Light.ttf'),
        'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Kanit-Bold': require('./src/assets/fonts/Kanit/Kanit-Bold.ttf'),
        'Kanit-Light': require('./src/assets/fonts/Kanit/Kanit-Light.ttf'),
        'Kanit-Medium': require('./src/assets/fonts/Kanit/Kanit-Medium.ttf'),
    });

    this.setState({ assetsLoaded: true });
}

  render() {
    return (
      // <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TestScreen"
          >

            {/* Screens */}
            <Stack.Screen
              name="PetScreen"
              component={PetScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="EditPetScreen"
              component={EditPetScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="TestScreen"
              component={TestScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="AboutUsScreen"
              component={AboutUsScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="ContactUsScreen"
              component={ContactUsScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="ChangePasswordScreen"
              component={ChangePasswordScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="TopUpScreen"
              component={TopUpScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="SelectVetScreen"
              component={SelectVetScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="TopUpHistoryScreen"
              component={TopUpHistoryScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="VetProfileScreen"
              component={VetProfileScreen}
              options={{ headerShown: false}}
            />

            {/* Screen Compoent */}
            <Stack.Screen
              name="VetDetailScreen"
              component={VetDetailScreen}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="VetReviewScreen"
              component={VetReviewScreen}
              options={{ headerShown: false}}
            />
            

            {/* Components */}
            <Stack.Screen
              name="NavBar"
              component={NavBar}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="SopetButton"
              component={SopetButton}
              options={{ headerShown: false}}
            />

            {/* Function */}
            <Stack.Screen
              name="DateToString"
              component={DateToString}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="TimeToString"
              component={TimeToString}
              options={{ headerShown: false}}
            />

          </Stack.Navigator>
        </NavigationContainer>
      // </Provider>
    );
  }
}
