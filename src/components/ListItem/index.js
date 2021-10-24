import React from 'react'
import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {Colors, Styling, Typography} from '../../styles';
const index = ({item,onPress=()=>{

}}) => {

    const {name= "",
    profile_image=null,
    website= "",
    company={}}=item
    return (
        <TouchableOpacity onPress={()=>{onPress()}} style={innerStyle.container}>
            <Image style={innerStyle.image} source={{uri:profile_image}}></Image>
            <View  style={innerStyle.containeCenter} >
            <Text style={innerStyle.title}>{name}</Text>
            <Text style={innerStyle.subTile}>{company?.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default index
const innerStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      margin:10,
      flexDirection:"row",
      borderRadius: 6,
   
    },
    containeCenter: {
      flex: 1,
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
    },
   
    image: {
      margin: 12,
      height: 60,
      width:60,
      borderRadius: 6,
   
    },
  });
  