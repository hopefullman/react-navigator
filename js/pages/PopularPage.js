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
import {createMaterialTopTabNavigator} from 'react-navigation';
import navigatorUtil from '../navigator/navigatorUtil';
class PopularPage extends Component{
  constructor(props){
    super(props);
    this.DefaultTopTabs=['android','java','js','css','h5','node','react-native','react-navigation']
  }

  TopTabsmap(){
    const TopTabs={}
    this.DefaultTopTabs.map((item,index)=>{
      TopTabs[`tab${index}`]={
        screen:props=><PopularTab {...props} tabLabel={item}/>,
        navigationOptions:{
          title:item
        }
      }
    })
    return TopTabs;
  }
  render(){
    const Tabs = createMaterialTopTabNavigator(this.TopTabsmap(),{
      tabBarOptions:{
        tabStyle:styles.tabStyle,
        upperCaseLabel:false,
        scrollEnabled:true,
        style:styles.style_,
        indicatorStyle:styles.indicatorStyle,
        labelStyle:styles.labelStyle
      }
    })
    return (
         <Tabs/>
      )
  }
}
const styles = StyleSheet.create({
  style_:{
    backgroundColor:'#21a675'
  },
  tabStyle:{
    minWidth:50
  },
  indicatorStyle:{
    height:1,
    backgroundColor:'#fff'
  },
  labelStyle:{
    fontSize:15,
    color:'#fff',
    marginTop:5,
    marginBottom:5
  }
});
export default PopularPage;

class PopularTab extends Component{
  render(){
    const {tabLabel}=this.props;
    return (
      <View>
        <Text>{tabLabel}</Text>
        <Text onPress={()=>{navigatorUtil.goPage({navigation:this.props.navigation},'DetailPage')}}>详情</Text>
      </View>
      )
  }
}