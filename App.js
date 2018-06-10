/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

//import Form from './components/src/LoginForm';
//import Form from './components/src/SignUpForm';
//hello


// const RootStack = StackNavigator(
//   {
//       Login: {
//         screen: LoginActivity, 
//       },

//       SignUp: {
//         screen: SignUpActivity,
//       },
//     },

//     {
//       initialRouteName: 'Login', 
//     }
// );


export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground style={styles.container} source={require('./components/img/signUp_bg.jpg')}>
        <Text style={styles.header}> Personal Banking App </Text>
        <Form/>
        </ImageBackground>

        {/* <RootStack /> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container:{
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 20,

  }
  
});
