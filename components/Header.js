import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,Navigator,TouchableOpacity,TouchableHighlight,Alert,TextInput,ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'; // New code
import ListAsk from './ListAsk';
import styles from '../styles/header';
//import Search from './search';
// import TimerMixin from 'react-timer-mixin';
//
// var API_URL='https://itunes.apple.com/search';
// var LOADING ={};
// var resultsCache = {
//   dataForQuery:{}
// };

class Header extends Component {
  // mixins:[TimerMixin]

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         isLoading: false,
  //         query:'',
  //         resultsData:new ListView.DataSource({
  //           rowHasChanged: (row1, row2) => row1 !=row2
  //         }),
  //     };
  // }
  //     componentDidMount(){
  //       this.searchAsk('tieude');
  //     }
  //    _urlForQuery(query:string):string{
  //       if(query.length > 2){
  //         return API_URL + '?media=movie&team' + encodeURIComponent(query);
  //       }
  //     }
  //
  //     getDataSource(Items: Array<any>): ListView.DataSource{
  //       return this.state.resultsData.cloneWithRows(Items);
  //     }
  //   searchAsk(query:string){
  //    this.timeoutID = null;
  //
  //     this.setState({query:query});
  //     var cacheResultsForQuery = resultsCache.dataForQuery[query];
  //     if(cacheResultsForQuery){
  //       if(!LOADING[query]){
  //         //Alert.alert('Number of results', cacheResultsForQuery.length + 'cache results');
  //         this.setState({
  //           isLoading: false,
  //           resultsData: this.getDataSource(cacheResultsForQuery),
  //         });
  //       //return cacheResultsForQuery;
  //       }
  //       else{
  //         this.setState({
  //           isLoading:true
  //         });
  //       }
  //     } else {
  //       var queryURL = this._urlForQuery(query);
  //       if(!queryURL) return;
  //
  //       this.setState({
  //         isLoading:true
  //       });
  //       LOADING[query] = true;
  //       resultsCache.dataForQuery[query] = null;
  //
  //       fetch(queryURL)
  //         .then((response)=>response.json())
  //         .catch((error)=>{
  //           LOADING[query] =false;
  //           resultsCache.dataForQuery[query] = undefined;
  //
  //           this.setState({
  //             isLoading:false,
  //             resultsData: this.getDataSource([])
  //           });
  //         })
  //         .then((responseData)=>{
  //           LOADING[query] = false;
  //           resultsCache.dataForQuery[query] = responseData.results;
  //
  //           this.setState({
  //             isLoading:false,
  //             resultsData: this.getDataSource(resultsCache.dataForQuery[query])
  //           })
  //           //Alert.alert('Number of results', responseData.resultsCount + 'results');
  //         });
  //     }
  //   }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.wr}>
          <TouchableOpacity onPress={() => Actions.menu()} >
            <Text>
              <Icon name="bars" size={40} color="#7088a9" />
            </Text>
          </TouchableOpacity>
            <Image source={{uri: 'http://miny.vn/assets/img/logo.png'}} style={styles.logo} />
          <TouchableOpacity onPress={() => Actions.ask()} >
            <Text style={styles.write}>
              <Icon name="pencil" size={35} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrr}>
          <ListAsk/>
        </View>
        <View style={styles.wrrr}>
          <Search
            // isLoading={this.state.isLoading}
            // onSearch={(event) =>{
            //   var searchString = event.nativeEvent.text;
            //   //Alert.alert('Seaching for...', searchString);
            //   this.clearTimeout(this.timeoutID);
            //   this.timeoutID = this.setTimeout(()=>this.searchAsk(searchString),1000);
            // }}
          />
        </View>
      </View>
    )
  }
}

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
          checkTitle: '',
          isLoading: false,
          errorMessage: ''
      };
  }
  render() {
    var spinner = this.state.isLoading ?
        ( <Text>Loadding!!!</Text> ) :
        ( <View/>);
    return (
      <View style={{flexDirection:'row'}}>
        <TextInput style={styles.search}
            placeholder="Mời tìm kiếm câu hỏi ..."
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            enablesReturnKeyAutomatically={true}
          //  onChangeText={this.bookTitleInput.bind(this)}
            //onEndEditing={this.props.onSearch}
          //  onChange={this.props.onSearch}
        />
        <TouchableOpacity style={{flex:1}} onPress={this.searchBooks.bind(this)} >
          <Text>Search</Text>
        </TouchableOpacity>
        {spinner}
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
      </View>
    );
  }
  bookTitleInput(event) {
      this.setState({ checkTitle: event.nativeEvent.text });
  }

  searchBooks() {
      this.fetchData();
  }
  fetchData() {

      this.setState({ isLoading: true });

      var baseURL = 'https://miny.vn/api/discussions';
      if (this.state.checkTitle !== '') {
          baseURL += encodeURIComponent('?include=startUser,lastUser,relevantPosts,relevantPosts.discussion,relevantPosts.user,startPost,startPost,tags&filter[q]='
           + this.state.checkTitle);
      }
      console.log('URL: >>> ' + baseURL);
      fetch(baseURL)
          .then((response) => response.json())
          .then((responseData) => {
              this.setState({ isLoading: false});
              if (responseData.data) {
                 this.Actions.results({
                   title:responseData.data.attributes.title,
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
// var styles = StyleSheet.create({
//
// });

export default Header;
