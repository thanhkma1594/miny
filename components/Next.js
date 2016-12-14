import React, { Component } from 'react';
import {
  StyleSheet,Text, View,ListView,TouchableOpacity,Navigator,
} from 'react-native';

class Next extends Component {
  constructor(props){
    super(props);
    this.state={
      so:0
    }
  }

  clickMe(){
    this.setState({
      so:this.state.so + 20
    });
  }
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}>{this.state.so}</Text>
        <TouchableOpacity onPress={()=>{this.clickMe()}}>
          <Text style={{fontSize:40}}>Tăng
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
Next.propType={
  so:React.PropTypes.string
}
var styles = StyleSheet.create({

});

export default Next;
