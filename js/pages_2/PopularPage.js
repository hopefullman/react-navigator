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
  render(){
  const TopTabs = createMaterialTopTabNavigator({
      PopularTab1:{
        screen:PopularTab,
        navigationOptions:{
          title:"tab1"
        }
      },
      PopularTab2:{
        screen:PopularTab,
        navigationOptions:{
          title:"tab2"
        }
      } 
    },{

    })
    return (
         <TopTabs/>
      )
  }
}
const styles = StyleSheet.create({
 
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