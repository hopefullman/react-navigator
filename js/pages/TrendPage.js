import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';
class TrendPage extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>TrendPage</Text>
        <TouchableHighlight onPress={()=>{this.props.changeActiveTintColor('#00F')}}><Text style={styles.Text}>再换颜色</Text></TouchableHighlight>
      </View>
      )
  }
}
const mapStateToProps=(state)=>{
  return {
    theme:state.theme.theme
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    changeActiveTintColor(theme){
      const action={
        type:'changeActiveTintColor',
        theme:theme
      }
      dispatch(action)
    }
  }
}
const styles = StyleSheet.create({
 container:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
 },
 Text:{
  paddingTop:20,
  paddingBottom:20,
  fontSize:20
 }
});

export default connect(mapStateToProps,mapDispatchToProps)(TrendPage);
