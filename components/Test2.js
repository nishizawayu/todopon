import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Text, TouchableOpacity,FlatList, Button} from "react-native";
import { useRecoilState } from 'recoil';
import { gatyaState } from './atom2';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image as ExpoImage} from 'expo-image';

function GalleryHome({navigation}){

  const [chara, setChara] = useRecoilState(gatyaState);

  let [gatyadate,setGatyadeta]= useState([]);

  let gatyavalue

  useEffect(()=>{
    if(chara[0] == 1000){
      gatyavalue = chara.slice(1);
    }
    else{
      gatyavalue = chara;
      gatyavalue.map((data)=>{
        gatyadate.push(data);
        setGatyadeta(gatyadate);
      })
      console.log(gatyadate);

    }

  },[chara])

  return(
    <View style={styles.container}>
      <ExpoImage 
              source={require("../assets/img/gallery_bg.png")}
              style={{
                position:'absolute',
                width:"100%",
                height:"100%"
            }}
            />
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
        <View style={{flexDirection:'row',flexWrap:"wrap",marginTop:70}}>

          {/* ケーキ */}
          <TouchableOpacity style={styles.galleryitem} onPress={()=> navigation.navigate('Sweets',{gatyadate})}>
            <ExpoImage 
              source={require("../assets/img/cake_book.png")}
              style={{width:175,height:175,marginLeft:-12}}
            />
            <Text style={styles.gallerytext}>
              夜のお菓子屋さん
            </Text>
          </TouchableOpacity>

          {/* おじじ */}
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Oji',{gatyadate})}>
            <ExpoImage 
              source={require("../assets/img/oji_book.png")}
              style={{width:175,height:175,marginLeft:-12}}
            />
            <Text style={styles.gallerytext}>
              きゃわおじさん
            </Text>
          </TouchableOpacity>

          {/* <View>
            <Text style={{position:"absolute",right:335,top:280,color:"#fff",fontSize:36,fontWeight:'bold'}}>＜</Text>
          </View>

          <View>
            <Text style={{position:"absolute",right:0,top:280,color:"#fff",fontSize:36,fontWeight:'bold'}}>＞</Text>
          </View> */}

          {/* 鶏 */}
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Egg',{gatyadate})}>
            <ExpoImage 
              source={require("../assets/img/chicken_book.png")}
              style={{width:175,height:175,marginLeft:-12}}
            />
            <Text style={styles.gallerytext}>
              鶏の卵
            </Text>
          </TouchableOpacity>

          {/* ぶた */}
          <TouchableOpacity style={styles.galleryitem}onPress={()=> navigation.navigate('Pig',{gatyadate})}>
            <ExpoImage 
              source={require("../assets/img/pig_book.png")}
              style={{width:175,height:175,marginLeft:-12}}
            />
            <Text style={styles.gallerytext}>
              豚の食べ方
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

function Sweets({navigation,route}){
  let i = 0;
  const { gatyadate } = route.params;
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/sweets_background.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <ExpoImage 
            source={require("../assets/img/pageback.png")}
            style={{width:22,height:28}}
          />
        </TouchableOpacity>
        {/* パンケーキ */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_sweets_1.png"))) {
            return(
              <TouchableOpacity style={{width:130,position:'absolute',top:220,left:15,zIndex:2,padding:10}} onPress={()=> navigation.navigate('SweetsModal',{i})}>
              <ExpoImage 
                source={require("../assets/img/sweets_1.png")}
                style={{width:180,height:180}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:130,position:'absolute',top:240,left:20,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/sweets_1_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }

        {/* ゼリー */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_sweets_2.png"))) {
            return(
              <TouchableOpacity style={{width:160,position:'absolute',top:250,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('SweetsModal',{i:i+1})}>
              <ExpoImage 
                source={require("../assets/img/sweets_2.png")}
                style={{width:130,height:130}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:160,position:'absolute',top:240,right:30,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/sweets_2_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
        {/* マカロン */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_sweets_3.png"))) {
            return(
              <TouchableOpacity style={{width:170,position:'absolute',top:460,left:20,zIndex:2,padding:10}} onPress={()=> navigation.navigate('SweetsModal',{i:i+2})}>
              <ExpoImage 
                source={require("../assets/img/sweets_3.png")}
                style={{width:180,height:180}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:170,position:'absolute',top:460,left:20,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/sweets_3_sil.png")}
                style={{width:151,height:151}}
              />
            </View>
            );
          }
        })()
        }
        {/* ケーキ */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_sweets_4.png"))) {
            return(
              <TouchableOpacity style={{width:170,position:'absolute',top:460,right:20,zIndex:2,padding:10}} onPress={()=> navigation.navigate('SweetsModal',{i:i+3})}>
              <ExpoImage 
                source={require("../assets/img/sweets_4.png")}
                style={{width:170,height:170}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:170,position:'absolute',top:430,right:40,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/sweets_4_sil.png")}
                style={{width:170,height:170}}
              />
            </View>
            );
          }
        })()
        }
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
      </ExpoImage>
    </View>
  )
}

function Egg({navigation,route}){
  i = 0;
  const { gatyadate } = route.params;
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/Egg_bg.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <ExpoImage 
            source={require("../assets/img/pageback.png")}
            style={{width:22,height:28}}
          />
        </TouchableOpacity>

        {/* 左上 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_chicken_1.png"))) {
            return(
              <TouchableOpacity style={{width:170,position:'absolute',top:300,left:10,zIndex:2,padding:10}} onPress={()=> navigation.navigate('EggModal',{i})}>
              <ExpoImage 
                source={require("../assets/img/chicken_1.png")}
                style={{width:200,height:200}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:170,position:'absolute',top:300,left:10,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/chicken_1_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
        {/* 右上 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_chicken_2.png"))) {
            return(
              <TouchableOpacity style={{width:150,position:'absolute',top:340,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('EggModal',{i:i+1})}>
              <ExpoImage 
                source={require("../assets/img/chicken_2.png")}
                style={{width:130,height:130}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:340,right:30,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/chicken_2_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
        {/* 左下 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_chicken_3.png"))) {
            return(
            <TouchableOpacity style={{width:150,position:'absolute',top:500,left:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('EggModal',{i:i+2})}>
              <ExpoImage 
                source={require("../assets/img/chicken_3.png")}
                style={{width:150,height:150}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:500,left:30,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/chicken_3_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
        {/* 右下 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_chicken_4.png"))) {
            return(
            <TouchableOpacity style={{width:150,position:'absolute',top:530,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('EggModal',{i:i+3})}>
              <ExpoImage 
                source={require("../assets/img/chicken_4.png")}
                style={{width:150,height:150}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:530,right:30,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/chicken_4_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
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
      </ExpoImage>
    </View>
  )
}
function Pig({navigation,route}){
  i = 0;
  const { gatyadate } = route.params;
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/Pig_bg.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <ExpoImage 
            source={require("../assets/img/pageback.png")}
            style={{width:22,height:28}}
          />
        </TouchableOpacity>

        {/* 左上 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_pig_2.png"))) {
            return(
            <TouchableOpacity style={{width:150,position:'absolute',top:300,left:10,zIndex:2,padding:10}} onPress={()=> navigation.navigate('PigModal',{i})}>
              <ExpoImage 
                source={require("../assets/img/pig_2.png")}
                style={{width:150,height:150}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:300,left:10,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/pig_2_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
        {/* 右上 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_pig_1.png"))) {
            return(
            <TouchableOpacity style={{width:200,position:'absolute',top:170,right:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('PigModal',{i:i+1})}>
              <ExpoImage 
                source={require("../assets/img/pig_1.png")}
                style={{width:200,height:200}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:200,position:'absolute',top:170,right:15,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/pig_1_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
        {/* 左下 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_pig_4.png"))) {
            return(
            <TouchableOpacity style={{width:200,position:'absolute',top:500,left:30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('PigModal',{i:i+2})}>
              <ExpoImage 
                source={require("../assets/img/pig_4.png")}
                style={{width:200,height:200}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:500,left:30,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/pig_4_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }

        {/* 右下 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_pig_3.png"))) {
            return(
            <TouchableOpacity style={{width:150,position:'absolute',top:430,right:40,zIndex:2,padding:10}} onPress={()=> navigation.navigate('PigModal',{i:i+3})}>
              <ExpoImage 
                source={require("../assets/img/pig_3.png")}
                style={{width:150,height:150}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:430,right:40,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/pig_3_sil.png")}
                style={{width:133,height:133}}
              />
            </View>
            );
          }
        })()
        }
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
      </ExpoImage>
    </View>
  )
}
function Oji({navigation,route}){
  i = 0;
  const { gatyadate } = route.params;
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/oji_bg.png")} style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity style={{position:'absolute',top:84,left:30,zIndex:2,padding:10,paddingRight:20}} onPress={()=> navigation.navigate('Home')}>
          <ExpoImage 
            source={require("../assets/img/pageback.png")}
            style={{width:22,height:28}}
          />
        </TouchableOpacity>

        {/* 左上 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_oji_1.png"))) {
            return(
            <TouchableOpacity style={{width:150,position:'absolute',top:180,left:-30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('OjiModal',{i})}>
              <ExpoImage 
                source={require("../assets/img/oji_1.png")}
                style={{width:250,height:250}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:250,left:20,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/oji_1_sil.png")}
                style={{width:150,height:150}}
              />
            </View>
            );
          }
        })()
        }

       
        {/* 右上 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_oji_2.png"))) {
            return(
            <TouchableOpacity style={{position:'absolute',top:220,right:10,zIndex:2,padding:10}} onPress={()=> navigation.navigate('OjiModal',{i:i+1})}>
              <ExpoImage 
                source={require("../assets/img/oji_2.png")}
                style={{width:200,height:200}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{position:'absolute',top:250,right:20,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/oji_2_sil.png")}
                style={{width:150,height:150}}
              />
            </View>
            );
          }
        })()
        }

        {/* 左下 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_oji_3.png"))) {
            return(
            <TouchableOpacity style={{left:-40,position:'absolute',top:400,zIndex:2}} onPress={()=> navigation.navigate('OjiModal',{i:i+2})}>
              <ExpoImage 
                source={require("../assets/img/oji_3.png")}
                style={{width:300,height:300}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{width:150,position:'absolute',top:450,left:30,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/oji_3_sil.png")}
                style={{width:140,height:200}}
              />
            </View>
            );
          }
        })()
        }

        {/* 右下 */}
        {
        (() => {
          if (gatyadate.includes(require("../assets/img/gatya_oji_4.png"))) {
            return(
            <TouchableOpacity style={{position:'absolute',top:420,right:-30,zIndex:2,padding:10}} onPress={()=> navigation.navigate('OjiModal',{i:i+3})}>
              <ExpoImage 
                source={require("../assets/img/oji_4.png")}
                style={{width:250,height:250}}
              />
            </TouchableOpacity>
            );
          } else {
            return ( 
            <View style={{position:'absolute',top:470,right:10,zIndex:2,padding:10}}>
              <ExpoImage 
                source={require("../assets/img/oji_4_sil.png")}
                style={{width:180,height:180}}
              />
            </View>
            );
          }
        })()
        }

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
            きゃわおじさん
          </Text>
        </View>
      </ExpoImage>
    </View>
  )
}

const SweetsModal = ({navigation,route})=>{
  const { i } = route.params;
  const Sweetsdeta = {
      id:[1,2,3,4],
      title:["お月様パンケーキ",
      "夜明け前ゼリー",
      "夜空のマカロン",
      "藍色のケーキ",
      ],
      imgdate:[
        require("../assets/img/sweets_1.png"),require("../assets/img/sweets_2.png"),require("../assets/img/sweets_3.png"),require("../assets/img/sweets_4.png"),
      ],
      text:["お月様のアイスクリームを落としたパンケーキ。激甘なので甘党さんにおすすめ。",
      "夜明け前のような綺麗なグラデーションがかかったゼリー。原宿系に結構刺さる。いろんな果物と一緒に食べると美味しい。夜のお菓子屋さんでのみ販売"  ,
      "夜空を詰め込んだマカロン。詳しいことはわからないがこれを食べると宇宙の真理に気づいてしまう。",
      "えぐい着色料のケーキ。アメリカでしかみたことない。健康志向の方にはおすすめしない。",
      ]
  }
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/sweets_background.png")} style={{flex:1,justifyContent:"center"}}>
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
            fontSize:28,
            fontWeight:"bold",
            textAlign:"center",
            paddingTop:10,
            paddingBottom:10,
          }}>
            夜のお菓子屋さん
          </Text>
        {/* モーダル */}
        </View>
        <View style={styles.modal}>
          <Text style={styles.filetext}>File.{Sweetsdeta.id[i]}</Text>
          <ExpoImage 
            source={Sweetsdeta.imgdate[i]}
            style={styles.modalimage}
          />
          <Text style={styles.modaltext}>
            {Sweetsdeta.title[i]}
          </Text>
          <View style={styles.modaltextcontainer}>
            <Text style={{fontSize:16}}>{Sweetsdeta.text[i]}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.roundbtn} onPress={()=>navigation.goBack()}>
          <Text style={styles.roundbtntext}>×</Text>
        </TouchableOpacity>
      </ExpoImage>
    </View>
  )

}

const OjiModal = ({navigation,route})=>{
  const { i } = route.params;
  const Sweetsdeta = {
      id:[1,2,3,4],
      title:["落ち込んだおじさん",
      "布団に潜ったおじさん",
      "喜んだおじさん",
      "高速移動おじさん",
      ],
      imgdate:[
        require("../assets/img/oji_1.png"),require("../assets/img/oji_2.png"),require("../assets/img/oji_3.png"),require("../assets/img/oji_4.png"),
      ],
      text:["憂鬱な表情や気持ちを抱えた中年男性です。元気を失い、やる気や希望を失ったような様子が見受けられます。心の支えや前向きな刺激を必要とし、励ましや共感が求められます。",
      "疲れたり安らぎを求めて布団に潜り込む中年男性です。リラックスや休息を追求し、世間の喧騒を一時的に忘れることで心地良さを感じます。安心感や居心地の良さを求める姿が特徴です。"  ,
      "笑顔や明るい表情を浮かべている中年男性です。喜びや幸せを感じており、喜ばしい出来事や楽しい瞬間に心が満たされています。その喜びを周囲と分かち合い、ポジティブなエネルギーを放っています。",
      "俊敏な動きで素早く移動する中年男性です。活発でエネルギッシュな姿勢を持ち、スピーディーな行動力を発揮します。目的地への到達やタスクの遂行を効率的に行い、周囲を驚かせるほどの迅速さを備えています。",
      ]
  }
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/oji_bg.png")} style={{flex:1,justifyContent:"center"}}>
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
            fontSize:28,
            fontWeight:"bold",
            textAlign:"center",
            paddingTop:10,
            paddingBottom:10,
          }}>
            きゃわおじさん
          </Text>
        {/* モーダル */}
        </View>
        <View style={styles.modal}>
          <Text style={styles.filetext}>File.{Sweetsdeta.id[i]}</Text>
          <ExpoImage 
            source={Sweetsdeta.imgdate[i]}
            style={{width:200,height:200,left:"20%"}}
            // style={styles.modalimage}
          />
          <Text style={styles.modaltext}>
            {Sweetsdeta.title[i]}
          </Text>
          <View style={styles.modaltextcontainer}>
            <Text style={{fontSize:16}}>{Sweetsdeta.text[i]}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.goBack()}
        style={{
          borderWidth:5,
          borderColor:"#AEACAC",
          borderRadius:"100%",
          backgroundColor:"#fff",
          width:70,
          height:70,
          position:"absolute",
          top:180,
          right:12}} 
        >
          <Text style={styles.roundbtntext}>×</Text>
        </TouchableOpacity>
      </ExpoImage>
    </View>
  )

}

const EggModal = ({navigation,route})=>{
  const { i } = route.params;
  const Sweetsdeta = {
      id:[1,2,3,4],
      title:["黄金のにわとり",
      "目立つにわとり",
      "ロードアイランドレッド",
      "白いにわとり",
      ],
      imgdate:[
        require("../assets/img/chicken_1.png"),require("../assets/img/chicken_2.png"),require("../assets/img/chicken_3.png"),require("../assets/img/chicken_4.png"),
      ],
      text:["鮮やかな金色の羽毛を持ち、卵の生産性が高く肉質も良い鶏の品種です。観賞用として人気で、美しい姿が鶏小屋や庭園で目を引きます。",
      "特徴的な外見や行動で注目を浴びる鶏の品種です。色鮮やかな羽毛や変わった形状、活発な動きなどが特徴で、人々に興味と喜びを与えます。"  ,
      "鮮やかな赤い羽毛を持つ鶏の品種です。優れた卵の生産性と美味しい肉質が特徴で、人気のある鶏として知られています。活発で丈夫な性格も持ち合わせ、飼育者に愛されています。",
      "白い羽毛を持つ鶏の品種です。清潔感があり、純粋な印象を与えます。卵の生産性や肉質は品種によって異なりますが、一般的には高い生産性と良質な肉質を持つことが多いです。",
      ]
  }
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/Egg_bg.png")} style={{flex:1,justifyContent:"center"}}>
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
            fontSize:28,
            fontWeight:"bold",
            textAlign:"center",
            paddingTop:10,
            paddingBottom:10,
          }}>
            鶏の卵
          </Text>
        {/* モーダル */}
        </View>
        <View style={styles.modal}>
          <Text style={styles.filetext}>File.{Sweetsdeta.id[i]}</Text>
          <ExpoImage 
            source={Sweetsdeta.imgdate[i]}
            style={styles.modalimage}
          />
          <Text style={styles.modaltext}>
            {Sweetsdeta.title[i]}
          </Text>
          <View style={styles.modaltextcontainer}>
            <Text style={{fontSize:16}}>{Sweetsdeta.text[i]}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.roundbtn} onPress={()=>navigation.goBack()}>
          <Text style={styles.roundbtntext}>×</Text>
        </TouchableOpacity>
      </ExpoImage>
    </View>
  )

}

const PigModal = ({navigation,route})=>{
  const { i } = route.params;
  const Sweetsdeta = {
      id:[1,2,3,4],
      title:["黒い豚",
      "少し黒い豚",
      "ピンクの豚",
      "豚の親子",
      ],
      imgdate:[
        require("../assets/img/pig_2.png"),require("../assets/img/pig_1.png"),require("../assets/img/pig_4.png"),require("../assets/img/pig_3.png"),
      ],
      text:["一般的には黒い皮膚と毛並みが特徴で、特に黒豚とも呼ばれます。美味しい肉質や高い脂肪の霜降りが評価され、風味豊かな料理に適しています。また、黒い豚は独特の風貌で人々の関心を引きます。",
      "少し黒い毛色を持つ豚の品種で、美味しい肉質や高い脂肪の霜降りが特徴です。独特の風味と柔らかさがあり、料理に深い味わいをもたらします。食通やグルメに人気があります。"  ,
      "淡いピンク色の皮膚と毛並みを持つ豚の品種です。肉質はジューシーで柔らかく、脂肪の霜降りも美しいです。その愛らしい外見と美味しい肉は、食卓で人気を博しています。",
      "親豚は子育てに熱心で、仔豚を守りながら授乳や遊びを通じて絆を築きます。仔豚は成長し、親からの学習を受けながら社会性を育みます。家族の絆が強く、可愛らしい姿が見られます。",
      ]
  }
  return(
    <View style={styles.container}>
      <ExpoImage source={require("../assets/img/Pig_bg.png")} style={{flex:1,justifyContent:"center"}}>
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
            fontSize:28,
            fontWeight:"bold",
            textAlign:"center",
            paddingTop:10,
            paddingBottom:10,
          }}>
            豚の食べ方
          </Text>
        {/* モーダル */}
        </View>
        <View style={styles.modal}>
          <Text style={styles.filetext}>File.{Sweetsdeta.id[i]}</Text>
          <ExpoImage 
            source={Sweetsdeta.imgdate[i]}
            style={styles.modalimage}
          />
          <Text style={styles.modaltext}>
            {Sweetsdeta.title[i]}
          </Text>
          <View style={styles.modaltextcontainer}>
            <Text style={{fontSize:16}}>{Sweetsdeta.text[i]}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.roundbtn} onPress={()=>navigation.goBack()}>
          <Text style={styles.roundbtntext}>×</Text>
        </TouchableOpacity>
      </ExpoImage>
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
      {/* ページ遷移 */}
      <Stack.Group>
        <Stack.Screen name="Home" component={GalleryHome} />
        <Stack.Screen name="Sweets" component={Sweets} />
        <Stack.Screen name="Egg" component={Egg} />
        <Stack.Screen name="Pig" component={Pig} />
        <Stack.Screen name="Oji" component={Oji} />
      </Stack.Group>
      {/* モーダル */}
      <Stack.Group>
        <Stack.Screen name="SweetsModal" component={SweetsModal} />
        <Stack.Screen name="OjiModal" component={OjiModal} />
        <Stack.Screen name="EggModal" component={EggModal} />
        <Stack.Screen name="PigModal" component={PigModal} />
      </Stack.Group>
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
    margin:10,

    marginLeft:23,
    marginTop:20
  },
  gallerytext:{
    fontSize:16,
    backgroundColor:"#fff",
    textAlign:"center",
    marginTop:10,
    borderColor:"#AEACAC",
    borderWidth:1,
    borderRadius:10,
    overflow: "hidden",
    padding:8
  },
  modal:{
    width:"88%",
    backgroundColor:"#fff",
    marginLeft:"6%",
    borderWidth:5,
    borderColor:"#AEACAC",
    marginTop:80
  },
  filetext:{
    fontSize:19,
    marginLeft:16,
    marginTop:16
  },
  modalimage:{
    width:120,
    height:120,
    marginLeft:"30%"
  },
  modaltext:{
    textAlign:"center",
    fontSize:24,
  },
  modaltextcontainer:{
    borderWidth:1,
    borderColor:"#AEACAC",
    margin:20,
    height:100
  },
  roundbtn:{
    borderWidth:5,
    borderColor:"#AEACAC",
    borderRadius:"100%",
    backgroundColor:"#fff",
    width:70,
    height:70,
    position:"absolute",
    top:210,
    right:12
  },
  roundbtntext:{
    fontWeight:'bold',
    color:"#AEACAC",
    fontSize:60,
    textAlign:"center",
    marginTop:-10
  }
});