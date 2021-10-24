import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import {Colors, Styling, Typography} from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/ListItem'
import _ from 'lodash'
const index = ({navigation}) => {
  const {userModel: userModelState} = useSelector(({userModel}) => {
    return {
      userModel,
    };
  });
  const {userModel: userStateDispatch} = useDispatch(({userModel}) => {
    return {
      ...userModel,
    };
  });
  
const {gatherUserList}=userStateDispatch
const {UserList=[]}=userModelState
const [sortList ,setSortList]=useState([])
useEffect(() => {
  
  const ini=async()=>{
let res =await gatherUserList().then((res)=>setSortList(res))
  }
  ini()
}, []);

function customFilter( toSearch=''){
  let result = UserList.filter(o => o?.name?.toLowerCase().includes(toSearch)||o?.email?.toLowerCase().includes(toSearch));
  setSortList(result)
}
  return (
    <SafeAreaView style={innerStyle.container}>
      <StatusBar
        barStyle="default"
        backgroundColor={Colors.PRIMARY_BACKGROUND}
      />
       <Text
            style={[
              innerStyle.title,
              Typography.FONT_BOLD,
              {color: Colors.FONT_SKYBLUE, fontSize: Typography.FONT_SIZE_20},
            ]}>
           Random User Details
          </Text>
          <TextInput
        style={{height: 40,margin:10,borderRadius:10,backgroundColor:"#FFFFFF"}}
        placeholder="Search!"
        onChangeText={text => {
          if(text===""){
            setSortList(UserList)
          }else
        {  customFilter(text.toLowerCase())}}}
      />
      <FlatList
      data={sortList}
      renderItem={({item})=><ListItem onPress={()=>{
    navigation.navigate('UserDetails',{userDetails:item});
      }} item={item}></ListItem>}
      
      ></FlatList>
      
    </SafeAreaView>
  );
};

export default index;

const innerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  containeCenter: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTile: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    textAlign: 'center',
    color: Colors.WHITE,
    marginVertical:40
  },
  firstButtonSytyle: {
    marginTop: 40,
    height: 50,
    width: '100%',
    borderRadius: 4,
    backgroundColor: Colors.BUTTON_SECONDORY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondButtonSytyle: {
    marginTop: 12,
    height: 50,
    width: '100%',
    borderRadius: 4,
    backgroundColor: Colors.BUTTON_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
