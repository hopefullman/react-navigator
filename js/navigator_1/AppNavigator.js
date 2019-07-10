import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

const INIT =createStackNavigator({
        WelcomePage:{
          screen:WelcomePage,
          navigationOptions:{
            header:null,
          }
        }
})
const Home =createStackNavigator({
        HomePage:{
          screen:HomePage,
          navigationOptions:{
            header:null,
          }
        },
        DetailPage:{
          screen:DetailPage,
          navigationOptions:{
            
          }
        }
})
export default createSwitchNavigator({
  INIT:INIT,
  Home:Home
},
{
  navigationOptions:{
    header:null
  }
})


