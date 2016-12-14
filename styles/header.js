import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1
  },
  wr:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:20,
  },
  logo:{
    width:140,
    height:55,
  },
  wrr:{
    flex:6,
    marginBottom:10,
    paddingLeft:10,
    paddingRight:10
  },
  wrrr:{
    paddingBottom:50,
  },
  write:{
    backgroundColor:'rgb(252, 62, 44)',
    borderRadius:50,
    height:61,
    width:61,
    textAlign:'center',
    paddingTop:10,
  //  textShadowColor:'blue',
  //  textShadowOffset:{width: 4, height:10},
  //  textShadowRadius:8
  },
  search:{
    flex:5,
    height:50,
    fontSize:20,
    backgroundColor:'#e8ecf3',
    textAlign:'center'
  }
});
