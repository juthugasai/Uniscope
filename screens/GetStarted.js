import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    Button,
    TouchableOpacity
} from "react-native";
import * as Animatable from 'react-native-animatable'
//import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class SplashScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>

                <View style={styles.header}>
                    <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                        source={require('../assets/Uniscope-img.gif')}
                        style={styles.logo}
                        resizeMode={'stretch'}
                    />
                </View>
                <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig">
                    <Text style={styles.title }>Stay Connected</Text>
                    <Text style={styles.text }>Sign In with your account</Text>
                    
                    <View style={styles.button}> 
                        <TouchableOpacity 
                        style={styles.signIn}
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                          }}>
                            <Text style={styles.text1}>Get Started</Text>
                        </TouchableOpacity>

                    </View>

                </Animatable.View>
            </View>
        )
    }



}

const{height} =Dimensions.get("screen")
const{width} =Dimensions.get("screen")

const height_logo =height * 0.7 *0.6
const width_logo =width * 0.9 *1


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#05375a'
    },

    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    footer:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30

    },

    logo:{
        width:height_logo, 
        height:height_logo

    },
    title:{
        color:'#05375a',
        fontWeight:'bold',
        fontSize:30
    },

    text:{
        color:'grey',
        marginTop:5

    },

    button:{
        alignItems:'flex-end',
        marginTop:10
    },

    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        borderRadius:50,
        flexDirection:'row',
        color:'blue',
        backgroundColor:'#0080fe',
        alignItems:'center'

    },
    text1:{
        color:'white'
    }



})