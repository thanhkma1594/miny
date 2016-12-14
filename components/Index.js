import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,View,Image,Text,TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';
import Ask from './Ask';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
import Menu from './Menu';
import Chude from './Chude';
import ChudeDetail from './ChudeDetail';
import Hocvuikiemtien from './Hocvuikiemtien';
/*var TabIcon = ({selected,title}) => {
  return(
    <Text style={{color: selected ? '#ffaa00':'#111', fontWeight:'bold'}}>
      {title}
    </Text>
  )
}; */

class TabIcon extends React.Component {
  render(){
    var color = this.props.selected ? '#ffaa00':'#111';
    return (
      <View>
        <Text style={{paddingTop:6}}>
          <Icon style={{color: color}} name={this.props.iconName} size={35} />
        </Text>
        <Text style={{color: color}}>{this.props.title}</Text>
      </View>
    );
  }
}
var App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={styles.tabBar}
        >

          <Scene key="miny" iconName={"home"} icon={TabIcon}
          titleStyle={{color:"rgb(0, 102, 51)",fontSize:18}}

          >
            <Scene
              key="header"
              component={Header}
              hideNavBar={true}
              initial
            />
            <Scene
              key="ask"
              component={Ask}
              hideNavBar={false}
              title="Đăng câu hỏi"
              hideTabBar={true}
            />
            <Scene
              key="menu"
              component={Menu}
              title="MENU"
              hideNavBar={false}
            />
            <Scene
              key="hocvuikiemtien"
              component={Hocvuikiemtien}
              title="Học vui kiếm tiền"
              hideNavBar={false}
            />
            <Scene
              key="register"
              component={Dangky}
              title="ĐĂNG KÝ"
              direction="vertical"
              hideNavBar
              hideTabBar={true}
            />
            <Scene
              key="chitietChude"
              component={ChudeDetail}
              title="Chi tiết"
              hideNavBar={false}
            />
            <Scene
              key="login"
              component={Dangnhap}
              title="Đăng nhập"
              direction="vertical"
              hideNavBar
              hideTabBar={true}
            />
          </Scene>
          <Scene key="chude" iconName={"folder-open-o"} icon={TabIcon} titleStyle={{color:"rgb(0, 102, 51)",fontSize:18}}>
            <Scene
              key="chude_all"
              component={Chude}
              title="TẤT CẢ CHỦ ĐỀ"
              initial
            />
          </Scene>

        </Scene>


      </Scene>
    </Router>
  );
}
var styles = StyleSheet.create({
  tabBar: {
    height:50,
    backgroundColor:"#00a888",
  },
  navbar:{
    height:10
  }
});
export default App;
