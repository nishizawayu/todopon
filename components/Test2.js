import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, StyleSheet, Text, TouchableOpacity,FlatList,ImageBackground} from "react-native";
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function GalleryHome({navigation}){

  return(
    <View style={styles.container}>
      <Text style={{
        position:"absolute",
        fontSize:36,
        left:'7%',
        top:70,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:135,
        paddingRight:135,
        borderColor:"#AEACAC",
        borderWidth:1,
        backgroundColor:"#fff",
      }}>図鑑</Text>
      <View>
        <View style={{flexDirection:'row',flexWrap:"wrap",marginTop:100}}>
          <TouchableOpacity style={styles.galleryitem} onPress={()=> navigation.navigate('Sweets')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/gatyamachine.png")}
              style={{width:135,height:178,marginLeft:8,}}
            />
            <View style={{borderBottomWidth:1,borderColor:"#AEACAC"}}></View>
            <Text style={styles.gallerytext}>
              夜のお菓子屋さん
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Sweets')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/gatyamachine.png")}
              style={{width:135,height:178,marginLeft:8}}
            />
            <View style={{borderBottomWidth:1,borderColor:"#AEACAC"}}></View>
            <Text style={styles.gallerytext}>
              夜のお菓子屋さん
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Sweets')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/gatyamachine.png")}
              style={{width:135,height:178,marginLeft:8}}
            />
            <View style={{borderBottomWidth:1,borderColor:"#AEACAC"}}></View>
            <Text style={styles.gallerytext}>
              鶏の卵
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Sweets')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/gatyamachine.png")}
              style={{width:135,height:178,marginLeft:8}}
            />
            <View style={{borderBottomWidth:1,borderColor:"#AEACAC"}}></View>
            <Text style={styles.gallerytext}>
              豚の食べ方
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

function Sweets({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../assets/img/sweets_background.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pageback.png")}
          />
        </TouchableOpacity>
        <View style={{
          position:"absolute",
          top:80,
          borderColor:"#FFAB73",
          borderWidth:3,
          backgroundColor:"#fff",
          width:"90%",
          marginLeft:"5%",
        }}>
          <Text style={{
            fontSize:24,
            textAlign:"center",
            paddingTop:10,
            paddingBottom:10,
          }}>
            夜のお菓子屋さん
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}


const Stack = createNativeStackNavigator();

function Test2() {
  return (
      <Stack.Navigator initialRouteName="Home"  
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={GalleryHome} />
        <Stack.Screen name="Sweets" component={Sweets} />
      </Stack.Navigator>
  );
}

export default Test2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFD384'
  },
  galleryitem:{
    width:"40%",
    backgroundColor:"#fff",
    margin:10,
    borderColor:"#AEACAC",
    borderWidth:1,
    borderRadius:10,
    marginLeft:23,
    marginTop:20
  },
  gallerytext:{
    fontSize:18,
    textAlign:"center",
    marginTop:10,
    marginBottom:10
  }
});