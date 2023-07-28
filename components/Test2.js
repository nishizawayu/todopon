import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, StyleSheet, Text, TouchableOpacity,FlatList,ImageBackground} from "react-native";
import { useRecoilState } from 'recoil';
import { gatyaState } from './atom2';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function GalleryHome({navigation}){

  const [chara, setChara] = useRecoilState(gatyaState);

  let [gatyadate,setGatyadeta]= useState([]);

  useEffect(()=>{
    if(chara !== null){
      let gatyavalue = chara.slice(3);
        gatyavalue.map((data)=>{
          gatyadate.push(data);
          setGatyadeta(gatyadate);
        })
        console.log(gatyadate);
    }
  },[chara])

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

          {/* ケーキ */}
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

          {/* ゲーム */}
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Game')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/game_gatya.png")}
              style={{width:135,height:178,marginLeft:8}}
            />
            <View style={{borderBottomWidth:1,borderColor:"#AEACAC"}}></View>
            <Text style={styles.gallerytext}>
              CRおじじ
            </Text>
          </TouchableOpacity>

          {/* 鶏 */}
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Egg')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/chicken_gatya.png")}
              style={{width:135,height:178,marginLeft:8}}
            />
            <View style={{borderBottomWidth:1,borderColor:"#AEACAC"}}></View>
            <Text style={styles.gallerytext}>
              鶏の卵
            </Text>
          </TouchableOpacity>

          {/* ぶた */}
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Pig')}>
            <Image 
              source={require("../assets/img/ribbon.png")}
              style={{marginLeft:10}}
            />
            <Image 
              source={require("../assets/img/pig_gatya.png")}
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
        {/* パンケーキ */}
        <TouchableOpacity style={{width:170,position:'absolute',top:230,left:20,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/sweets_1.png")}
            style={{width:180,}}
          />
        </TouchableOpacity>
        {/* ゼリー */}
        <TouchableOpacity style={{width:160,position:'absolute',top:250,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/sweets_2.png")}
            style={{width:130}}
          />
        </TouchableOpacity>
        {/* マカロン */}
        <TouchableOpacity style={{width:170,position:'absolute',top:460,left:20,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/sweets_3.png")}
            style={{width:180}}
          />
        </TouchableOpacity>
        {/* ケーキ */}
        <TouchableOpacity style={{width:170,position:'absolute',top:460,right:20,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/sweets_4.png")}
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

function Egg({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../assets/img/Egg_bg.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pageback.png")}
          />
        </TouchableOpacity>

        {/* 左上 */}
        <TouchableOpacity style={{width:170,position:'absolute',top:300,left:10,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/chicken_1.png")}
            style={{width:200,}}
          />
        </TouchableOpacity>
        {/* 右上 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:340,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/chicken_2.png")}
            style={{width:130}}
          />
        </TouchableOpacity>
        {/* 左下 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:500,left:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/chicken_3.png")}
          />
        </TouchableOpacity>
        {/* 右下 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:530,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/chicken_4.png")}
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
            鶏の卵
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}
function Pig({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../assets/img/Pig_bg.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pageback.png")}
          />
        </TouchableOpacity>

        {/* 左上 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:300,left:10,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pig_2.png")}
            style={{width:150,}}
          />
        </TouchableOpacity>
        {/* 右上 */}
        <TouchableOpacity style={{width:200,position:'absolute',top:170,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pig_1.png")}
            style={{width:200}}
          />
        </TouchableOpacity>
        {/* 左下 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:500,left:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pig_4.png")}
          />
        </TouchableOpacity>
        {/* 右下 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:430,right:40,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pig_3.png")}
            style={{width:150}}
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
            豚の食べ方
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}
function Game({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../assets/img/Game_bg.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/pageback.png")}
          />
        </TouchableOpacity>

        {/* 左上 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:200,left:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/game_1.png")}
            style={{width:150,}}
          />
        </TouchableOpacity>
        {/* 右上 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:200,right:50,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/game_2.png")}
            style={{width:200}}
          />
        </TouchableOpacity>
        {/* 左下 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:400,left:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/game_3.png")}
          />
        </TouchableOpacity>
        {/* 右下 */}
        <TouchableOpacity style={{width:150,position:'absolute',top:400,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require("../assets/img/game_4.png")}
            style={{width:150}}
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
            CR
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
        <Stack.Screen name="Egg" component={Egg} />
        <Stack.Screen name="Pig" component={Pig} />
        <Stack.Screen name="Game" component={Game} />
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