import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Dimensions,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class FetchDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      showtext:''
    }

  }
  search(){
    alert('123')
    let url=`https://api.github.com/search/repositories?q=${this.searchkey}`
    alert(url);
    fetch(url)
    .then(response=>{
      if (response.ok) {
          return response.text()
      }else{
          throw new Error('请求失败')
      }
    })
    .then(responseText=>{
      this.setState({
        showtext:responseText
      })
    })
    .catch((err)=>{
      this.setState({
        showtext:err.toString()
      })
    })
  }
  render(){
    return (
      <Fragment>
        <Text>FetchDemo</Text>
        <View style={styles.ViewStyle}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(text) => this.searchkey=text } />
          <TouchableHighlight onPress={()=>this.search()}><Text>搜索一下</Text></TouchableHighlight>
        </View>
        <Text>{this.state.showtext}</Text>
      </Fragment>
      )
  }
}
const { Width,Height } = Dimensions.get('window');
const styles = StyleSheet.create({
  ViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
 TextInput:{
  width:300,
  borderColor:'#444',
  borderWidth:1
 }
});

export default FetchDemo;
