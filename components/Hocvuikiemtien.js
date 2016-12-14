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
        <Text style={{fontSize:18}}>Lưu ý: Admin chỉ xem xét những bài giải trong vòng 24 giờ từ khi người đặt câu hỏi đăng bài.
        Sau thời gian đó, bài giải sẽ không được tham gia tính tiền thưởng.</Text>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
          <Icon name="trophy" size={40} color="#12b5c9"/>
          <Text style={{fontSize:25,color:'black'}}> XẾP HẠNG</Text>
        </View>
        <Text style={{color:'black',fontSize:18,paddingTop:8}}>Bảng xếp hạng doanh thu tháng 12</Text>
        <View style={{flexDirection:'row'}}>
          <Text>stt</Text><Text>ten</Text><Text>baigiang</Text><Text>doanhthu</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>stt</Text><Text>ten</Text><Text>baigiang</Text><Text>doanhthu</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>stt</Text><Text>ten</Text><Text>baigiang</Text><Text>doanhthu</Text>
        </View>
      </View>
    </ScrollView>
  );
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:55,
    marginTop:53
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
    paddingBottom:10,
  }
});

export default Hocvuikiemtien;
