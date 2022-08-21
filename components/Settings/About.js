import React, { Component } from "react";
import { View, StyleSheet,SafeAreaView,Text,Button,TouchableOpacity,  Dimensions} from 'react-native'

export default class About extends Component {

render(){
    return(
        <View style={styles.container}>

                <Button
                    title="Go to Details"
                    style={styles.button}
                    onPress={() => this.props.navigation.goBack()}
                />
            <View style={styles.header}>
            <Text style={styles.text}>About this App</Text></View>
            <Text style={styles.text1}>
                This app is build using connection of the world wide web by connection to the universe and other aspects of our thechnology.
            </Text>

            <Text style={styles.text1}>
                So, we are providing what ever we have to our App users("Uniscope-App").
            </Text>

            <Text style={styles.text1}>
                In the future we will be adding new features to this app.This app is now running "Beta Version".
                This app may have bugs within the app so kindle we request you to share it in the "feedback section".     
            </Text>

            <View
                style={{
                    borderBottomWidth:1,
                    borderBottomColor:'black',
                    top:10
                }}
                
                />

            <Text style={styles.text1}>
                App-Version:1.0    
            </Text>

            <Text style={styles.text1}>
                App-Channel:Beta,    
            </Text>

            <Text style={styles.text1}>
                Software:C-os
            </Text>
            <Text style={styles.text1}>
                Code-name:Uniscope
            </Text>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text2}>App Feedback</Text>
            </TouchableOpacity>
        </View>
    )
}



}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    header:{
        alignItems: 'center',

    },

    text: {
        //flex: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#939496",
        margin:60,
        //alignItems: 'center',
        //justifyContent: 'center',
      },

      text1: {
        //flex: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#939496",
        marginTop:10,
        //margin:60,
        //alignItems: 'center',
        //justifyContent: 'center',
      },

      text2: {
        //flex: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        marginTop:10,
        //margin:60,
        //alignItems: 'center',
        //justifyContent: 'center',
      },

      button: {
        //flex: 0.25,
        //marginTop: 50,
        //marginLeft: 50,
        //marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
    
        borderRadius: 30,
        backgroundColor: 'purple',
      },



})