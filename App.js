import * as React from 'react';
import Navigation from "./components/AppStackNavigator"
//import Splash from "./screens/Login"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

export default function App() {
  return (
    
      <AppContainer/>
    
  )
   
  
}

const switchNavigator = createSwitchNavigator({
  Navigation:{screen: Navigation}

   // Home:{screen: HomeScreen},
    //Details:{screen: DetailsScreen},
  
})

const AppContainer =  createAppContainer(switchNavigator);
