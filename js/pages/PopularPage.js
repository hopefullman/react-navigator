import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
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
import {connect} from 'react-redux';
class PopularPage extends Component{
  constructor(props){
    super(props);
    this.DefaultTopTabs=['android','java','js','css','h5','node','react-native','react-navigation']
  }

  TopTabsmap(){
    const TopTabs={}
    this.DefaultTopTabs.map((item,index)=>{
      TopTabs[`tab${index}`]={
        screen:props=><PopularTabPage {...props} tabLabel={item}/>,
        navigationOptions:{
          title:item
        }
      }
    })
    return TopTabs;
  }
  render(){
    const {theme}=this.props;
    const Tabs = createMaterialTopTabNavigator(this.TopTabsmap(),{
      tabBarOptions:{
        tabStyle:styles.tabStyle,
        upperCaseLabel:false,
        scrollEnabled:true,
        style:{backgroundColor:theme},
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
    backgroundColor:'#333'
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
const mapStateToProps=(state)=>{
  return {
    theme:state.theme.theme
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PopularPage);

class PopularTab extends Component{
  constructor(props){
    super(props);
    this.state={
      isRefresh:false,
      showtext:'',
      list:[]
    }
  }
  componentDidMount(){
    this.getdata()
  }
  getdata(){
    const {tabLabel}=this.props;
    let url=`https://api.github.com/search/repositories?q=${tabLabel}&sort=stars`
    fetch(url)
    .then(response=>{
      if (response.ok) {
          return response.json();
      }else{
          throw new Error('请求失败')
      }
    })
    .then(responsejson=>{
      this.setState({
        list:responsejson.items
      })
    })
    .catch((err)=>{
      this.setState({
        showtext:err.toString()
      })
    })
  }
  _onRefresh_(){
    // alert('_onRefresh_')
  }
  _onLoadMore_(){
    // alert('_onLoadMore_')
  }
  render(){
    const {tabLabel,testtext}=this.props;
    return (
      <ScrollView style={{height:1000}}>
        <Text>{tabLabel}</Text>
        <FlatList
          extraData={this.state}
          data={this.state.list}
          keyExtractor={(item) => item.id.toString()}
          refreshing={this.state.isRefresh}
          onRefresh={() => this._onRefresh_()}
          onEndReached={() => this._onLoadMore_()}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => <View><Text onPress={ ()=>{ navigatorUtil.goPage('DetailPage',{keyname:`${item.id}`}) }}>{item.id}</Text></View>}/>
      </ScrollView>
      )
  }
}
const mapStateToPropss=(state)=>{
  return {
    theme:state.theme.theme
  }
}
const mapDispatchToPropss=(dispatch)=>{
  return {

  }
}
const PopularTabPage=connect(mapStateToPropss,mapDispatchToPropss)(PopularTab)