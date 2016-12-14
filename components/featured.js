import React, { Component } from 'react';
import {
  StyleSheet,Text,ScrollView,View,TextInput,TouchableOpacity,TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({

});

class Featured extends Component {
    render() {
        return (
          <View style={{marginTop:60}}>
         <Text>Current Scene: {this.props.title}</Text>

         <TouchableHighlight onPress={this.props.onForward}>
           <Text>Tap me to load the next scene</Text>
         </TouchableHighlight>

         <TouchableHighlight onPress={this.props.onBack}>
           <Text>Tap me to go back</Text>
         </TouchableHighlight>
       </View>
        );
    }
}

module.exports = Featured;
