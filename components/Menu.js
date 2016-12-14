import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,ScrollView,TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/menu';

var Menu = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.welcome}>
          <Icon name="money" size={40} color="#ffaa00" />
          <Text  style={styles.welcome1} onPress={() => Actions.hocvuikiemtien()}>
              Học vui kiếm tiền
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.welcome}>
          <Icon name="question" size={40} color="rgb(231, 76, 60)"/>
          <Text  style={styles.welcome1} onPress={() => Actions.hocvuikiemtien()}>
              Giải đáp thắc mắc
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.welcome}>
          <Icon name="user-plus" size={40} color="rgb(0, 102, 51)"/>
          <Text  style={styles.welcome1} onPress={() => Actions.register()} >
              Đăng ký
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.welcome}>
          <Icon name="user-o" size={40} color="#5858FA"/>
          <Text  style={styles.welcome1} onPress={() => Actions.login()} >
              Đăng nhập
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.welcome}>
          <Icon name="info-circle" size={40} color="#00a888"/>
          <Text  style={styles.welcome1} onPress={() => Actions.hocvuikiemtien()}>
              Giới thiệu Miny
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.welcome}>
          <Icon name="diamond" size={40} color="rgb(0, 191, 255)"/>
          <Text  style={styles.welcome1} onPress={() => Actions.hocvuikiemtien()}>
              Danh hiệu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.welcome}>
          <Icon name="star" size={40} color="rgb(231, 76, 60)"/>
          <Text  style={styles.welcome1} onPress={() => Actions.hocvuikiemtien()}>
              Đang theo dõi
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// var styles = StyleSheet.create({
//
// });

export default Menu;
