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
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import {StackNavigator} from 'react-navigation';

export default class LoginForm extends React.Component {

    static navigationOptions =
    {
        title: 'LoginActivity',
    };

    render() {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.pageHead}>
                LOGIN
            </Text>

            <TextInput 
            placeholder="Username"
            placeholderTextColor= 'rgba(0,0,0,0.2)'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>

            <TextInput 
            placeholder="Password"
            placeholderTextColor= 'rgba(0,0,0,0.2)'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>

            <TouchableOpacity 
                style={styles.button}
                onPress={this.loginPageStatus}>
                <Text style={styles.btntext}> Log in </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.clickableText}
                onPress={this.signUpPage}>
                <Text style={styles.clickableText}> New User - Sign Up </Text>
            </TouchableOpacity>

        </View>
    );
  }

    loginPageStatus = () => {
        alert('User is logged in');
        //this.props.navigation.navigate('SignUpActivity');        
    }  
  
    signUpPage = () => {
        alert('sign in here pls');
        //this.props.navigation.navigate('SignUpActivity');        
    }

}

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },
    textInput:{
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#rgba(255,255,255,0.7)',
        marginBottom: 20,
    },

    button: {
        alignSelf: 'stretch',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
    }, 

    btntext: {
        color: '#fff',
        fontSize: 18,

    },

    pageHead: {
        alignItems: 'center',
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    
      },

      clickableText: {
        alignItems: 'center',
        fontSize: 15,
        color: 'rgba(255,255,255,0.7)',
        marginBottom: 5,
        marginTop: 5,
    
      }
  
});
