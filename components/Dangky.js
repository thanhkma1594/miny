import React, { Component } from 'react';
import {
  StyleSheet,Text,ScrollView,View,TextInput,TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {  Akira } from 'react-native-textinput-effects';
import styles from '../styles/register';

var Dangky = () => {
  return (
    <ScrollView>
      <Text style={{padding:20,backgroundColor:'#e8ecf3',flexDirection:'row'}} onPress={()=> Actions.pop()}>
        <Icon name="times" size={30} color="#00a888"/>
      </Text>
      <Register />
      <View style={{flexDirection:'row', justifyContent:'center',marginBottom:60}}>
        <Text style={{color:'#7088a9', fontSize:18, paddingTop:20}}>Đăng nhập nếu bạn đã có tài khoản? </Text>
        <Text style={{color:'#00a888', fontSize:18, paddingTop:20}} onPress={() => Actions.login()}> Đăng nhập</Text>
      </View>
    </ScrollView>
  );
}

class Register extends Component{

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.iconbtfb}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
          <Text style={styles.iconbtfbtext}>Login with Facebook</Text>
        </Icon.Button>
      </View>
      <View style={styles.iconbtgg}>
        <Icon.Button name="google" backgroundColor="#d13e32" onPress={this.loginWithFacebook}>
          <Text style={styles.iconbtfbtext}>Login with Google</Text>
        </Icon.Button>
      </View>

        <Akira
        label={'Tên đăng nhập'} style={styles.input}
        // this is used as active and passive border color
        borderColor={'#aaa'}
        labelStyle={{ color: '#7088a9' }}
        />
        <Akira
        label={'Email'} style={styles.input}
        // this is used as active and passive border color
        borderColor={'#aaa'}
        labelStyle={{ color: '#7088a9' }}
        />
        <Akira
        label={'Mật khẩu'} style={styles.input}
        // this is used as active and passive border color
        borderColor={'#aaa'}
        labelStyle={{ color: '#7088a9' }}
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// var styles = StyleSheet.create({
//
//
// });

export default Dangky;
