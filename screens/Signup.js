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
import { IconButton, Title } from 'react-native-paper';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else if(password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then((response) => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            username: this.state.username,
          });
          return Alert.alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => {
                this.props.navigation.navigate('Home');
              },
            },
          ]);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: '100%' }}>
          <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <View
              style={{ justifyContent: 'center', alignItems: 'center' }}></View>
            <View style={styles.profilContainer}>
              <Text style={styles.title}>Space-Traker</Text>
            </View>

            <View style={styles.buttonContainer}>
              <View style={{ alignItems: 'center' }}>
                <TextInput
                  style={styles.loginBox}
                  placeholder="First Name"
                  keyboardType="email-address"
                  onChangeText={(text) => {
                    this.setState({
                      firstName: text,
                    });
                  }}
                />
                <TextInput
                  style={styles.loginBox}
                  placeholder="Last Name"
                  keyboardType="email-address"
                  onChangeText={(text) => {
                    this.setState({
                      lastName: text,
                    });
                  }}
                />
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
                  placeholder="Enter Password"
                  onChangeText={(text) => {
                    this.setState({
                      password: text,
                    });
                  }}
                />
                <TextInput
                  style={styles.loginBox}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  onChangeText={(text) => {
                    this.setState({
                      confirmpassword: text,
                    });
                  }}
                />
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                  onPress={() => {
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      
                    );
                  }}>
                  <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>

                <IconButton
                  icon="keyboard-backspace"
                  size={30}
                  style={styles.navButton}
                  color="#5b3a70"
                  onPress={() => {
                    this.props.navigation.navigate('LoginScreen');
                  }}
                />
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
    flexDirection: 'row',
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
    marginTop: 150,
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
    //borderRadius: 25,
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
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});
