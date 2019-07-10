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
import navigatorUtil from '../navigator/navigatorUtil';
import PopularPage from './PopularPage';
import FavoratePage from './FavoratePage';
import TrendPage from './TrendPage';
import MyPage from './MyPage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Dynamic from '../navigator/Dynamic'
class HomePage extends Component{
  render(){
    navigatorUtil.navigation=this.props.navigation
    return (
      <Fragment>
        <Dynamic/>
      </Fragment>
      )
  }
}
const styles = StyleSheet.create({
 tabBarStyle:{
  fontSize:20
 }
});

export default HomePage;
