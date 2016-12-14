import React, { Component } from 'react';
import {
  StyleSheet,Text,View,ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

var Chude = () => {
  return (
    <Detai />
  );
}
class Detai extends Component {
constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Toán học', 'Tin học', 'Mỹ thuật - Âm nhạc', 'Vật lý', 'Ngoại ngữ', 'Lịch sử',
        'Tự nhiên - Xã hội', 'Hóa học', 'Văn học', 'Công nghệ', 'Sinh học',
        'Giải đáp thắc mắc','Góc thông tin','Tài liệu học tập','Góc giải trí',
      ])
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text style={styles.welcome}>{rowData}</Text>}
            />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    marginBottom:60
  },
  welcome: {
    fontSize: 20,
    margin:20,
    textAlign: 'center',
    color: '#7088a9',
  },
});

export default Chude;
