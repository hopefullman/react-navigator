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
import NavigatorBar from '../navigator/NavigatorBar';
import navigatorUtil from '../navigator/navigatorUtil';
import Entypo from 'react-native-vector-icons/Entypo';
class DetailPage extends Component{
  componentDidMount(){
    

  }
  render(){
    const {navigation}=this.props;
    const { params } = this.props.navigation.state;
    let leftButton = (
      <Entypo
        containerStyle={{paddingLeft: 10}}
        size={20}
        color="#333"
        name="chevron-thin-left"
        type="Entypo"
        onPress={() => {
          navigatorUtil.goBack(navigation);
        }}/>);
    return (
      <Fragment>
        <NavigatorBar
            hide={false}
            title={'DetailPage'}
            style={{backgroundColor: '#fff'}}
            leftButton={leftButton}/>
        <Text>DetailPage</Text>
        <Text>{params.keyname}</Text>
      </Fragment>
      )
  }
}
const styles = StyleSheet.create({
 
});

export default DetailPage;
