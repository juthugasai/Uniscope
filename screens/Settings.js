import React, { Component } from "react";
import { View, StyleSheet,SafeAreaView,Text,Button,TouchableOpacity,  Dimensions} from 'react-native'


export default class Settings extends Component {

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.size}>
                <Button
                    title="Go to Details"
                    style={styles.button}
                    onPress={() => this.props.navigation.goBack()}
                />
                </View>
                <View style={styles.text}>
                

                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.text}>Your Info</Text>
                </TouchableOpacity>
                

                

                </View>
                
                <View
                style={{
                    borderBottomWidth:1,
                    borderBottomColor:'black',
                    top:10
                }}
                
                />
                <View>
                    <TouchableOpacity 
                    style={styles.button2}
                    onPress={() => {
                        this.props.navigation.navigate('About');
                      }}>
                        <Text style={styles.text}>About App</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    text: {
        //flex: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#939496",
    
        alignItems: 'center',
        //justifyContent: 'center',
      },

      button1:{
        marginTop:70,
        marginLeft:-250
      },
      button2:{
        margin:10,
        marginTop:20

      }



})




