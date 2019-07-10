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
import navigatorUtil from './navigatorUtil';
import PopularPage from '../pages/PopularPage';
import FavoratePage from '../pages/FavoratePage';
import TrendPage from '../pages/TrendPage';
import MyPage from '../pages/MyPage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

const DynamicTabs={
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
              }
      }
class Dynamic extends Component{
   createDynamicTabs_(){
    const {PopularPage,TrendPage,MyPage}=DynamicTabs;
    const DynamicTabs_={PopularPage,TrendPage,MyPage};
    PopularPage.navigationOptions.tabBarLabel='最re';
    return createBottomTabNavigator(DynamicTabs_,{
            tabBarOptions: {
              labelStyle: {
                fontSize: 13,
              },
              activeTintColor:'blue'
            }
          })
    }
  render(){
    navigatorUtil.navigation=this.props.navigation
    const Tabs=this.createDynamicTabs_();
    return (
      <Fragment>
        <Tabs/>
      </Fragment>
      )
  }
}
const styles = StyleSheet.create({
 tabBarStyle:{
  fontSize:20
 }
});

export default Dynamic;
