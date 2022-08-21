import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import SearchBar from "../components/SearchBar"
import Screen from "../components/Screen"
import News from "../screens/News"
import Settings from '../screens/Settings';
import Home from '../screens/Home'
import ISS from '../screens/ISS'
import Meteor from '../screens/Meteor'

export default class HomeNavigator extends Component {

  render(){
    return(
      <View style={styles.container}>
                <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground 
          source={require('../assets/A-3/Bg2.jpg')}
          style={styles.backgroundImage}>
              <Text style={styles.text}>Uniscope</Text>

         <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('ISS');
            }}>
            
            <Image
              source={require('../assets/A-2/iss_icon.png')}
              style={styles.iss}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Meteor');
            }}>
            
            <Image
              source={require('../assets/A-2/meteor_icon.png')}
              style={styles.meteor}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            
            <Image
              source={require('../assets/A-3/Exo.png')}
              style={styles.exo}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Settings');
            }}>
            
            <Image
              source={require('../assets/settings.png')}
              style={styles.settings}
            />
          </TouchableOpacity>
            
            <Image
              source={require('../assets/Uniscope-img.gif')}
              style={styles.uni}
            />
          
          <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          top:110
  }}
/>
            
          </ImageBackground>
          <News/>
</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#845c98'

   // alignItems: 'center',
    //justifyContent: 'center',
  },
  view:{
    flex:0.1,
    justifyContent:"center",
    alignItems:"center"
  },
  backgroundImage: {
    flex: 0.1,
    resizeMode: 'cover',
   // width:1100
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height
   
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft:100,
    alignItems:'center',
    justifyContent:'center'
  },
  
  iss: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    right: 5,
    left:120,
    top: 40,
    backgroundColor: 'white',
    borderRadius:40,
    

  },
  
  meteor: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    right: 5,
    left:180,
    top: 40,
    backgroundColor: 'white',
    borderRadius:40

  },
  exo: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    right: 5,
    left:60,
    top: 40,
    backgroundColor: 'white',
    borderRadius:40,
    alignItems:'center'

  },
  uni: {
    position: 'absolute',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    right: 5,
    left:-10,
    top: -45,
    //backgroundColor: 'white',
    //borderRadius:40,
    alignItems:'center'

  },
  settings: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    right: 5,
    left:240,
    top: 40,
    backgroundColor: 'white',
    borderRadius:40,
    

  },

})