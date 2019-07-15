
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Text,
  View,
  ViewPropTypes,
  StyleSheet,
  Platform
} from 'react-native'

class NavigatorBar extends Component {
  //类型检查
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    titleLayoutStyle: ViewPropTypes.style,
    hide: PropTypes.bool,
    rightButton: PropTypes.element,
    leftButton: PropTypes.element,
  };

  render() {

    //中间标题
    let titleView = this.props.titleView ? this.props.titleView :
        <Text
          ellipsizeMode="head"
          numberOfLines={1}
          style={styles.title}
        >{this.props.title}</Text>;

    //整体布局
    let content = this.props.hide ? null :
      <View style={styles.navBar}>
        {this.getButtonElement(this.props.leftButton)}
        <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
          {titleView}
        </View>
        {this.getButtonElement(this.props.rightButton)}
      </View>;
        
    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }

  getButtonElement = (data) => {
    return (
      <View style={styles.navBarButton}>
        {data || null}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  navBarButton: {
    alignItems: 'center',
    paddingHorizontal: 10
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? 44 : 50
  },
  navBarTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 20,
    color: '#333',
  },
});

export default NavigatorBar;
