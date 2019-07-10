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
class HomePage extends Component{
   HomePageBottomTabs_(){
    return createBottomTabNavigator({
              PopularPage:{
                screen:PopularPage,
                navigationOptions:{
                  tabBarLabel:'最新',
                  tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome5 name='hotjar' size={23} style={{color:tintColor}}/>
                  )
                }
              },
              FavoratePage:{
                screen:FavoratePage,
                navigationOptions:{
                  tabBarLabel:'收藏',
                  tabBarIcon:({tintColor,focused})=>(
                    <MaterialIcons name='favorite' size={23} style={{color:tintColor}}/>
                  )
                }
              },
              TrendPage:{
                screen:TrendPage,
                navigationOptions:{
                  tabBarLabel:'趋势',
                  tabBarIcon:({tintColor,focused})=>(
                    <Feather name='trending-up' size={23} style={{color:tintColor}}/>
                  )
                }
              },
              MyPage:{
                screen:MyPage,
                navigationOptions:{
                  tabBarLabel:'我的',
                  tabBarIcon:({tintColor,focused})=>(
                    <Fontisto name='person' size={23} style={{color:tintColor}}/>
                  )
                }
              },
          },{
            tabBarOptions: {
              labelStyle: {
                fontSize: 13,
              },
              activeTintColor:'red'
            }
          })
    }
  render(){
    navigatorUtil.navigation=this.props.navigation
    const HomePageBottomTabs=this.HomePageBottomTabs_();
    return (
      <Fragment>
        <HomePageBottomTabs/>
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
