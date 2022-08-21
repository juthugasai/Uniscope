import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}></View>
        <ScrollView style={{ width: '100%' }}>
          <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <View style={styles.profileContainer}>
              <Text style={styles.title}>Space-Traker</Text>
            </View>

            <View style={styles.buttonContainer}>
              <View style={{ alignItems: 'center' }}>
                <TextInput
                  style={styles.loginBox}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={(text) => {
                    this.setState({
                      emailId: text,
                    });
                  }}
                />
                <TextInput
                  style={styles.loginBox}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={(text) => {
                    this.setState({
                      password: text,
                    });
                  }}
                />
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                  onPress={() => {
                    this.userLogin(this.state.emailId, this.state.password);
                  }}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.text}
                  onPress={() => {
                    this.props.navigation.navigate('Signup');
                  }}>
                  <Text style={styles.text}>New user? Join here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    paddingBottom: 30,
    color: 'black',
    marginTop: 250,
    alignItems: 'center',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#7500F7',
    fontSize: 20,
    margin: 10,
    marginBottom: 10,
    paddingLeft: 10,
    alignItems: 'center',
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,

    backgroundColor: '#7500F7',
    fontSize: 22,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 16,
    color: '#7500F7',
  },
});
