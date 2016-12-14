'use strict';

import React , {Component} from "react";

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
  } from "react-native";
var SearchResults = require('./searchRs');

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        padding: 10
    },
    searchInput: {
        height: 100,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 1,
        borderWidth: 1,
        flex: 1,
        borderRadius: 4,
        padding: 5
    },
    button: {
        height: 36,
        backgroundColor: '#f39c12',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    }
});

class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookAuthor: '',
            bookTitle: '',
            isLoading: false,
            errorMessage: ''
        };
    }


    render() {
        var spinner = this.state.isLoading ?
            ( <Text>Loadding!!!</Text> ) :
            ( <View/>);
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Search by book title and/or author</Text>
                <View>
                    <Text style={styles.fieldLabel}>Book Title:</Text>
                    <TextInput placeholder={'Title of book'}  style={styles.searchInput} onChangeText={this.bookTitleInput.bind(this)}/>
                </View>
                <View>
                    <Text style={styles.fieldLabel}>Author:</Text>
                    <TextInput placeholder={'Author of book'} style={styles.searchInput} onChangeText={this.bookAuthorInput.bind(this)}/>
                </View>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.searchBooks.bind(this)}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    }

    bookTitleInput(event) {
        this.setState({ bookTitle: event.nativeEvent.text });
    }

    bookAuthorInput(event) {
        this.setState({ bookAuthor: event.nativeEvent.text });
    }

    searchBooks() {
        this.fetchData();
    }

    fetchData() {

        this.setState({ isLoading: true });

        var baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
        if (this.state.bookAuthor !== '') {
            baseURL += encodeURIComponent('inauthor:' + this.state.bookAuthor);
        }
        if (this.state.bookTitle !== '') {
            baseURL += (this.state.bookAuthor === '') ? encodeURIComponent('intitle:' + this.state.bookTitle) : encodeURIComponent('+intitle:' + this.state.bookTitle);
        }

        console.log('URL: >>> ' + baseURL);
        fetch(baseURL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ isLoading: false});
                if (responseData.items) {
                   this.Actions.results({
                     image:responseData.items.volumeInfo.imageLinks,
                     thum:responseData.items.volumeInfo.thumbnail,
                     mota:responseData.items.volumeInfo.description,
                     title:responseData.items.volumeInfo.title,
                     author:responseData.items.volumeInfo.author
                   })

                } else {
                    this.setState({ errorMessage: 'No results found'});
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                }))
            .done();
    }

}

module.exports = SearchBooks;
import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,ScrollView,TouchableOpacity,Image
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/FontAwesome';
//import VideoPlayer from 'react-native-videoplayer';

var Hocvuikiemtien = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Image source={{uri: 'http://miny.vn/assets/img/landing/lp_banner_event_money.png'}} style={styles.logo} />
        <View style={styles.intro}>
          <Text style={styles.intro1}>GIỚI THIỆU</Text>
          <Text style={styles.intro2}>
           Miny là một dự án giáo dục được thành lập với sứ mệnh giúp đỡ các em học sinh từ cấp 1 đến cấp 3.
           Để góp phần củng cố nguồn dữ liệu trên website cũng như khuyến khích tinh thần học tập của các em học sinh, đồng thời tạo động lực cho thành viên giải bài. BQT Miny bắt đầu đưa ra hình thức thưởng tiền cho tất cả các thành viên tham gia giải bài. Các thành viên sẽ hoạt động theo tháng, có mức tiền tương ứng mỗi câu trả lời theo từng mức level.
           Bài đăng của thành viên khi tham gia giải bài được admin duyệt là Lời giải giá trị mới được cộng tiền vào doanh thu.
           </Text>
        </View>
        <View style={styles.luuy}>
            <Text style={styles.luuy1}>
            <Icon name="star" size={30} color="#ffaa00"/>  Admin sẽ ưu tiên duyệt những câu trả lời đúng, và sớm nhất, những câu trả lời phía sau nếu trùng cách làm sẽ không được tính. Hãy cố gắng có những cách giải khác để kiếm được tiền nhé! Những thành viên tích cực trong tháng,
              có được những kết quả cao sẽ dành được thêm những phần quà từ Ban Quản Trị web. Mọi hành vi gian lận, spam câu trả lời nếu bị phát hiện sẽ ban nick không cần báo trước.
            </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
          <Icon name="recycle" size={40} color="#12b5c9"/>
          <Text style={{fontSize:25,color:'black'}}> CÁCH QUY ĐỔI</Text>
        </View>
        <View style={styles.img}>
          <Image source={require('../images/level.jpg')} style={styles.level} />
        </View>
        <Text style={{fontSize:18,margin:10}}>Lưu ý: Admin chỉ xem xét những bài giải trong vòng 24 giờ từ khi người đặt câu hỏi đăng bài.
        Sau thời gian đó, bài giải sẽ không được tham gia tính tiền thưởng.</Text>
      </View>
    </ScrollView>
  );
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:53,
    marginBottom:60
  },
  luuy:{
    backgroundColor:'#ddecf6',
    margin:15,
    borderRadius:13
  },
  luuy1:{
    fontSize:18,
    padding:25,
  //  textAlign:'justify'
  },
  img:{
    flex:1,
    alignItems:'center',
    marginTop:15,
    marginBottom:15
  },
  level:{
    width:470,
    height:300,
  },
  video: {
    position: 'absolute',
    top: 20, left: 20, right: 20, bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  logo:{
    flex:1,
    height:125,
  },
  intro:{
    margin:20,
  },
  intro1:{
    fontSize:25,
    textAlign:'center',
    paddingTop:10,
    color:'black',
    fontWeight:'bold'
  },
  intro2:{
    fontSize:20,
    paddingTop:10,
    paddingBottom:10
  }
});

export default Hocvuikiemtien;
