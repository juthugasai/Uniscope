import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ISS from '../screens/ISS';
import Navigator from '../navigation/HomeNavigator';
import Meteor from '../screens/Meteor';
import Settings from '../screens/Settings';
import About from '../components/Settings/About';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Navigator"
        screenOptions={{ headerShown: false }}>

        <Stack.Screen 
        name="Navigator" 
        component={Navigator} 
        />
        
        <Stack.Screen 
        name="Home" 
        component={Home} 
        />

        <Stack.Screen 
        name="ISS" 
        component={ISS} 
        />

        <Stack.Screen 
        name="Meteor" 
        component={Meteor} 
        />

        <Stack.Screen 
        name="Settings" 
        component={Settings} 
        />

        <Stack.Screen 
        name="About" 
        component={About} 
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
