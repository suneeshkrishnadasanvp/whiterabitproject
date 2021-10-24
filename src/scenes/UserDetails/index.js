import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,FlatList,
  Image,
} from 'react-native';
import {Colors, Styling, Typography} from '../../styles';
import {useDispatch, useSelector} from 'react-redux';

const index = ({navigation,route}) => {
  const {userDetails={}}=route?.params?route?.params:{}
  const {name= "",
  profile_image=null,
  website= "",
  company={}}=userDetails||{}
console.log("userDetails",userDetails)
  return (
    <SafeAreaView style={innerStyle.container}>
      <StatusBar
        barStyle="default"
        backgroundColor={Colors.PRIMARY_BACKGROUND}
      />
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity>
      <Text
            style={[
              innerStyle.title,
              Typography.FONT_BOLD,
              { fontSize: Typography.FONT_SIZE_20},
            ]}>
          Back
          </Text>
          </TouchableOpacity>
       <Text
            style={[
              innerStyle.title,
              Typography.FONT_BOLD,
              {color: Colors.FONT_SKYBLUE, fontSize: Typography.FONT_SIZE_20},
            ]}>
          User Details
          </Text>
          </View>
     
      <ScrollView
        contentContainerStyle={[
          Styling.FLEX_DIRECTION_COLUMN,
          innerStyle.containeCenter,
        ]}>
         <View >
            <Image style={innerStyle.image} source={{uri:profile_image}}></Image>
            <View  style={innerStyle.containeCenter} >
            <Text style={innerStyle.title,{fontSize:26}}>{name}</Text>
            <Text style={innerStyle.subTile,{fontSize:26}}>{company?.name}</Text>
            </View>
        </View>
      </ScrollView>
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
  subTile: {
      fontSize: Typography.FONT_SIZE_16,
      textAlign: 'left',
      color: Colors.SECONDARY,
     
  },
  title: {
    fontSize: Typography.FONT_SIZE_20,
    textAlign: 'left',
    color: Colors.SECONDARY,
    ...Typography.FONT_BOLD,
    marginVertical:10
  },
 
  image: {
    margin: 12,
    height: 300,
    width:300,
    borderRadius: 6,
 
  },
});
