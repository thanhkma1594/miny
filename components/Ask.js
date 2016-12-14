import React, { Component } from 'react';
import {
  StyleSheet,Text,ScrollView,View,TextInput,TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalPicker from 'react-native-modal-picker'

var Ask = () => {
  return (
    <ScrollView>
      <InputText />

    </ScrollView>
  );
}

class InputText extends Component{

  render(){
        const data = [
            { label: 'Toán học' },
            { label: 'Tin học' },
            { label: 'Mỹ thuật - Âm nhạc' },
            { label: 'Vật lý' },
            { label: 'Ngoại ngữ' },
            { label: 'Lịch sử' },
            { label: 'Tự nhiên - Xã hội' },
            { label: 'Hóa học' },
            { label: 'Văn học' },
            { label: 'Công nghệ' },
            { label: 'Sinh học' },
            { label: 'Giải đáp thắc mắc' },
            { label: 'Góc thông tin' },
            { label: 'Tài liệu học tập' },
            { label: 'Góc giải trí' },
        ];
    return(
      <View style={styles.container}>
        <ModalPicker
          data={data}
          initValue="Chọn chủ đề"
          selectStyle={{backgroundColor:'#00a888'}}
          selectTextStyle={{color:'#fff',fontSize:22}}
          optionTextStyle={{color:'rgb(0, 102, 51)',fontSize:18}}
          cancelTextStyle={{color:'red',fontSize:22}}
        />

        <TextInput style={styles.input}
          placeholder="Tiêu đề câu hỏi" />

        <TextInput style={styles.textarea}

        editable = {true}
        maxLength = {500}
        multiline = {true}
        numberOfLines = {8}

          placeholder="Nội dung câu hỏi" />

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    marginLeft:50,
    marginRight:50,
  },
  textarea:{
    fontSize:16,
    backgroundColor:'#e8ecf3',
    marginTop:15
  },
  input:{
    fontSize:20,
    backgroundColor:'#e8ecf3',
    marginTop:15
  }

});

export default Ask;
