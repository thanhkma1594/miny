import React, { Component } from 'react';
import {
  StyleSheet,Text, View,ListView,TouchableOpacity,Navigator,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/listAsk';
import ChudeDetail from './ChudeDetail';
import Next from './Next';

var REQUEST_URL = 'http://miny.vn/api/discussions?page%5Blimit%5D=100?page[limit]=100';

class ListAsk extends Component {
  constructor(props) {
     super(props);
     this.state = {
         isLoading: true,
         dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2
         })
     };
  }
componentDidMount() {
  this.fetchData();
}

fetchData() {
  fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((responseData) => {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          isLoading: false
      });
  })
  .done();
}
  createRow(check){
    return(
      <View>
      <TouchableOpacity  onPress={() => Actions.chitietChude({tieude:check.attributes.title,cmt:check.attributes.commentsCount})}>
        <View style={styles.iconlist}>
          <Icon name="pencil" size={18} color="rgb(52, 73, 94)" />
          <Text style={styles.titlebt}>Chủ đề: {check.attributes.title}</Text>
        </View>
        <View style={styles.monrep}>
          <Text style={styles.mon}>Môn: {check.attributes.username}</Text>
          <Text style={styles.rep}><Icon name="comment-o" size={18} color="#7088a9" /> {check.attributes.commentsCount}</Text>
          <Text style={styles.rep}><Icon name="star-o" size={18} color="#FACC2E" /> {check.attributes.point}</Text>
        </View>
      </TouchableOpacity>

      </View>
    )
  }
  render(){
    if (this.state.isLoading) {
    return this.renderLoadingView();
    }
    return(
       <ListView
       dataSource={this.state.dataSource}
       renderRow={this.createRow.bind(this)}
       />

    );
  }

  renderLoadingView() {
    return (
        <View style={styles.loading}>
            <Text style={styles.load}>
                Miny.vn - Cộng đồng hỗ trợ học tập
            </Text>
        </View>
    );
  }

}

export default ListAsk;
