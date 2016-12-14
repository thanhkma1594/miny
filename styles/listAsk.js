import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  iconlist:{
    paddingLeft:10,
    flexDirection:'row',
    paddingTop:15,
  },
  titlebt:{
    color:'rgb(52, 73, 94)',
    paddingLeft:5,
    paddingRight:5,
    fontSize:18,
  },
  mon:{
    color:'#7088a9',
    fontSize:16,
    paddingLeft: 28,
  },
  rep:{
    color:'red',
    fontSize:16,
    paddingLeft: 28,
  },
  monrep:{
    flexDirection:'row',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50
  },
  load:{
    color:'#00a888',
    fontSize:22
  }
});
