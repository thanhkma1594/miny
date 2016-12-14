import React, { Component } from 'react';
import {
  StyleSheet,Text,View,ListView,Image,TouchableOpacity,TouchableHighlight
} from 'react-native';

class ChudeDetail extends Component {

    render() {
        return (
            <View style={{marginTop:60}}>
            <Text>Tieu de: {this.props.tieude}</Text>
            <Text>Cmt: {this.props.commentsCount}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({

});

export default ChudeDetail;
