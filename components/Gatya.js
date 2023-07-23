import { View, Image, StyleSheet, Text, TouchableOpacity,FlatList} from "react-native";
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LinearGradient} from 'expo-linear-gradient';

export default function Gatya() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    (async () => {
      const count = await AsyncStorage.getItem('count'); // 保存されたcount（文字列）の取得

      setCount(Number(count || 0)); // Numberにキャストしてインクリメント
    })();
  }, []);

  useEffect(() => {
    if (count) { 
      AsyncStorage.setItem('count', String(count)); // Stringにキャストして保存
    }
  }, [count]);

  const [chara, setChara] = useState('');
  
  const charaResult = [];
    const star1Chara = [require("../assets/img/chicken_2.png"),require("../assets/img/chicken_3.png"),require("../assets/img/chicken_4.png"),require("../assets/img/pig_1.png"),require("../assets/img/pig_3.png"),require("../assets/img/pig_4.png"),require("../assets/img/flower_1.png"),require("../assets/img/flower_2.png"),require("../assets/img/flower_3.png"),require("../assets/img/flower_4.png"),require("../assets/img/food_1.png"),require("../assets/img/food_2.png"),require("../assets/img/food_3.png"),require("../assets/img/game_1.png"),require("../assets/img/game_2.png"),require("../assets/img/game_3.png"),require("../assets/img/game_4.png")];
    const star2Chara = [require("../assets/img/pig_2.png"),require("../assets/img/oji_1.png"),require("../assets/img/oji_2.png"),require("../assets/img/oji_3.png"),require("../assets/img/oji_4.png"),require("../assets/img/food_4.png"),];
    const star3Chara = [require("../assets/img/sweets_1.png"),require("../assets/img/sweets_2.png"),require("../assets/img/sweets_3.png"),require("../assets/img/sweets_4.png"),require("../assets/img/chicken_1.png"),];
    const star1Prob = 82;
    const star2Prob = 96;
    const star1CharaTotal = 17;
    const star2CharaTotal = 6;
    const star3CharaTotal = 5;

  const generateRandom10Chara = () => {
    if (count >= 1000){
    setCount(count - 1000);
    for (let i = 0; i < 10; i++) {
      const randomStarNum = Math.floor(Math.random() * 100);
      if (randomStarNum <= star1Prob) {
        const randomStar1CharaNum = Math.floor(Math.random() * star1CharaTotal);
        charaResult.push(star1Chara[randomStar1CharaNum]);
      } else if (randomStarNum <= star2Prob) {
        const randomStar2CharaNum = Math.floor(Math.random() * star2CharaTotal);
        charaResult.push(star2Chara[randomStar2CharaNum]);
      } else {
        const randomStar3CharaNum = Math.floor(Math.random() * star3CharaTotal);
        charaResult.push(star3Chara[randomStar3CharaNum]);
      }
    }
    setChara(charaResult);
    }
  }

  const generateRandomChara = () => {
    if (count >= 100){
    setCount(count - 100);
      const randomStarNum = Math.floor(Math.random() * 100);
      if (randomStarNum <= star1Prob) {
        const randomStar1CharaNum = Math.floor(Math.random() * star1CharaTotal);
        charaResult.push(star1Chara[randomStar1CharaNum]);
      } else if (randomStarNum <= star2Prob) {
        const randomStar2CharaNum = Math.floor(Math.random() * star2CharaTotal);
        charaResult.push(star2Chara[randomStar2CharaNum]);
      } else {
        const randomStar3CharaNum = Math.floor(Math.random() * star3CharaTotal);
        charaResult.push(star3Chara[randomStar3CharaNum]);
      }
          setChara(charaResult);
    }
  }

  console.log(chara);
  const renderImageItem = ({ item }) => (
    <Image
      source={item}
      style={{ width: 60, height: 60, margin: 5 }}
    />
  );
    return (
      <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        // colors={['rgba(0,0,0,0.8)','transparent']}
        colors={['transparent','rgba(0,0,0,0.8)']}
        style={styles.background}
      />
      <View style={{flexDirection: "row",}}>
          <Image
            source={require('../assets/img/medal.png')}
            style={{width:60,height:60,marginTop:55,position:"absolute",right:120 }}
          />
          <Text style={styles.medal}>{count}</Text>
        </View>
      <View         
      style={{
        flex:1,
        }}>
      <FlatList
        data={chara}
        numColumns={5} // 表示する列数を設定してください
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImageItem}
        style={{
          position: 'absolute',
          top: '80%',
        }}/>
      </View>
      <View style={{}}>
      <Image
            source={require('../assets/img/gatya_name_1.png')}
            style={{position:"absolute",}}
          />
      </View>
    <View
    style={{
      flex:1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems:"flex-end",
      marginBottom:"20%",
    }}>
    
    <TouchableOpacity style={styles.button} onPress={generateRandomChara}>
        <Text>1回引く!</Text>
        <View style={{flexDirection: "row",}}>
          <Image
            source={require('../assets/img/medal.png')}
            style={{width:31,height:29,position:"absolute",zIndex:30,left:-10,top:3}}
          />
          <Text style={{
                  fontSize:12,
                  color:'white',
                  borderColor: "#EBCB8E",
                  backgroundColor: '#EBCB8E',
                  height:14,
                  borderWidth: 1,
                  borderRadius:2,
                  textAlign:"right",
                  marginTop:8,
                  width:70,
                  paddingBottom:15,
                  paddingRight:9
          }}>100枚</Text>
        </View>
    </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={generateRandom10Chara}>
        <Text>10回引く!</Text>
        <View style={{flexDirection: "row",}}>
          <Image
            source={require('../assets/img/medal.png')}
            style={{width:31,height:29,position:"absolute",zIndex:30,left:-10,top:3}}
          />
          <Text style={styles.buttonmedal}>1000枚</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#11009E'
    },
    medal:{
      width:100,
      marginTop:70,
      paddingTop:5,
      paddingBottom:5,
      textAlign:"center",
      fontSize: 20,
      position:'absolute',
      right:30,
      backgroundColor:"#fff",
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius:10,
      zIndex:-1,
      overflow: "hidden",
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',

    },
    button: {
      backgroundColor: '#FFF9B0',
      width:140,
      height:60,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
    },
    buttonmedal:{
      fontSize:12,
      color:'white',
      borderColor: "#EBCB8E",
      backgroundColor: '#EBCB8E',
      height:14,
      borderWidth: 1,
      borderRadius:2,
      textAlign:"right",
      marginTop:8,
      width:70,
      paddingBottom:15,
      paddingRight:5
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
  });
