import React, { Component } from 'react';
import {
  StyleSheet,Text, View,ListView,TouchableOpacity,Navigator,TextInput
} from 'react-native';

var API_URL='http://miny.vn/api/discussions';
var LOADING ={};
var resultsCache = {
  dataForQuery:{}
}
class Search extends Component {
  render() {
    return (
      <View>
      <TextInput style={styles.search}
          placeholder="Mời tìm kiếm câu hỏi ..."
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={this.props.onSearch}
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  search:{
    height:50,
    borderColor:'rgb(231, 76, 60)',
    borderWidth:2,
    fontSize:20,
    backgroundColor:'#e8ecf3',
    textAlign:'center'
  }
});

export default Search;
