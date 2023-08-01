import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRecoilState } from 'recoil';
import { countState } from './atom';
import { gatyaState } from './atom2';
import { View, Image, StyleSheet, Text, TouchableOpacity,FlatList,Animated} from "react-native";
import React,{useState,useEffect,useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LinearGradient} from 'expo-linear-gradient';
function GatyaHome({ navigation }) {

  const [count,setCount] = useRecoilState(countState);
  
  useEffect(() => {
    (async () => {
      const savedData = await AsyncStorage.getItem('todoData');
      if (savedData !== null) {
        const parsedData = JSON.parse(savedData);
        setCount(JSON.parse(parsedData.count));
      }
    })();
  }, []);

  useEffect(() => {
    if (count) { 
      const dataToSave = {
        count: JSON.stringify(count),
      };

      AsyncStorage.setItem('todoData', JSON.stringify(dataToSave)); // Stringにキャストして保存
    }
  }, [count]);

  const [chara, setChara] = useRecoilState(gatyaState);
  
  const charaResult = [];
    const star1Chara = [require("../assets/img/gatya_chicken_2.png"),require("../assets/img/gatya_chicken_3.png"),require("../assets/img/gatya_chicken_4.png"),require("../assets/img/gatya_pig_2.png"),require("../assets/img/gatya_pig_3.png"),require("../assets/img/gatya_pig_4.png"),require("../assets/img/gatya_flower_1.png"),require("../assets/img/gatya_flower_2.png"),require("../assets/img/gatya_flower_3.png"),require("../assets/img/gatya_flower_4.png"),require("../assets/img/gatya_food_1.png"),require("../assets/img/gatya_food_2.png"),require("../assets/img/gatya_food_3.png"),require("../assets/img/gatya_food_4.png"),];
    const star2Chara = [require("../assets/img/gatya_pig_1.png"),require("../assets/img/gatya_oji_1.png"),require("../assets/img/gatya_oji_2.png"),require("../assets/img/gatya_oji_3.png"),require("../assets/img/gatya_oji_4.png"),require("../assets/img/gatya_game_1.png"),require("../assets/img/gatya_game_2.png"),require("../assets/img/gatya_game_3.png"),require("../assets/img/gatya_game_4.png")];
    const star3Chara = [require("../assets/img/gatya_sweets_1.png"),require("../assets/img/gatya_sweets_2.png"),require("../assets/img/gatya_sweets_3.png"),require("../assets/img/gatya_sweets_4.png"),require("../assets/img/gatya_chicken_1.png"),require("../assets/img/gatya_sword.png"),require("../assets/img/gatya_fairy.png"),];
    const star1Prob = 82;
    const star2Prob = 96;
    const star1CharaTotal = 14;
    const star2CharaTotal = 9;
    const star3CharaTotal = 7;

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
    console.log(chara);
    }
  }

  const gatya10 = () => {
    navigation.navigate('Machine', { chara: charaResult });
    generateRandom10Chara();
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
  
    const gatya1 = () => {
      navigation.navigate('Machine2', { chara: charaResult });
      generateRandomChara();
      }

  console.log(chara);
  return (
    <View style={styles.container}>
    <LinearGradient
    // Background Linear Gradient
    // colors={['rgba(0,0,0,0.8)','transparent']}
    colors={['transparent','rgba(0,0,0,0.8)']}
    style={styles.background}
  />
  <View style={{flexDirection: "row",flex:1}}>
      <Image
        source={require('../assets/img/medal.png')}
        style={{width:60,height:60,marginTop:55,position:"absolute",right:115}}
      />
      <Text style={styles.medal}>{count}</Text>
    </View>
  <View style={{flex:1,flexDirection:"row"}}>

    <View style={{flexDirection:"column",backgroundColor:"rgba(255,255,255,0.7)",alignSelf:"center",padding:20,position:"absolute",zIndex:2,top:120,left:10}}>
      <Text style={styles.text}>秘</Text>
      <Text style={styles.text}>密</Text>
      <Text style={styles.text}>の</Text>
      <Text style={styles.text}>お</Text>
      <Text style={styles.text}>菓</Text>
      <Text style={styles.text}>子</Text>
    </View>
    <Image
        source={require('../assets/img/pancake.png')}
        style={{
          width:230,height:230,transform: [{rotateZ: '12deg'}],position:"absolute",top:-10,left:10        }}
      />
    <Image
        source={require('../assets/img/jelly.png')}
        style={{
          width:230,height:230,transform: [{rotateZ: '-12deg'}],position:"absolute",right:-15,top:100,
        }}
      />
    <View style={{flexDirection:"column",backgroundColor:"rgba(255,255,255,0.7)",alignSelf:"center",padding:20,position:"absolute",right:14,zIndex:200}}>
      <Text style={styles.text}>誰</Text>
      <Text style={styles.text}>も</Text>
      <Text style={styles.text}>知</Text>
      <Text style={styles.text}>ら</Text>
      <Text style={styles.text}>な</Text>
      <Text style={styles.text}>い</Text>
    </View>
  </View>
    
  <View style={{
    flex:1,
  }}>
  <Image
        source={require('../assets/img/gatya_name_1.png')}
        style={{
          position:"absolute",
          top:"80%",
          left:"15%",
          width:279,
          height:120
        }}
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

<TouchableOpacity style={styles.button} onPress={gatya1}>
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
    <TouchableOpacity style={styles.button} onPress={gatya10}>
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

function GatyaResult({ route,navigation }) {
  const { chara } = route.params;
  const renderImageItem = ({ item }) => (
    <Image
      source={item}
      style={{ width: 65, height: 65, margin: 5 }}
    />
  );
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['transparent','rgba(255,255,255,1)']}
          style={styles.background}
        />
        <View         
        style={{
          flexDirection:'row',
          }}>
        <Text style={{
          fontSize:24,
          position:"absolute",
          top:-250,
          left:'15%',
          backgroundColor:"#fff",
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:80,
          paddingRight:80,
        }}>
          ガチャ結果
        </Text>
        <FlatList
          data={chara}
          numColumns={5} // 表示する列数を設定してください
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderImageItem}
          style={{
            position: 'absolute',
            top:-50,
            left:8
          }}/>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text style={{
          fontSize:24,
          backgroundColor:"#fff",
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:40,
          paddingRight:40,
          position:"absolute",
          top:200,
          left:130,
          borderRadius:4,
          borderColor: "#fff",
          borderWidth: 1,
          borderRadius:5,
          overflow: "hidden",
          }}>戻る</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
}

function GatyaResult2({ route,navigation }) {
  const { chara } = route.params;
  const renderImageItem = ({ item }) => (
    <Image
      source={item}
      style={{ width: 125, height: 125, margin: 5 }}
    />
  );
  return (
  <View style={styles.container}>
    <LinearGradient
        colors={['transparent','rgba(255,255,255,1)']}
        style={styles.background}
      />
      <View         
      style={{
        flexDirection:'row',
        }}>
      <Text style={{
        fontSize:24,
        position:"absolute",
        top:-250,
        left:'15%',
        backgroundColor:"#fff",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:80,
        paddingRight:80,
      }}>
        ガチャ結果
      </Text>
      <FlatList
        data={chara}
        numColumns={1} // 表示する列数を設定してください
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImageItem}
        style={{
          position: 'absolute',
          top:-50,
          left:'32%'
        }}/>
    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
      <Text style={{
        fontSize:24,
        backgroundColor:"#fff",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        position:"absolute",
        top:200,
        left:130,
        borderRadius:4,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius:5,
        overflow: "hidden",
        }}>戻る</Text>
    </TouchableOpacity>
    </View>
  </View>
  );
}

function GatyaMachine({route,navigation}){
  const { chara } = route.params;
  const rotationValue = useRef(new Animated.Value(0)).current;
  const rotateImage = () => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      rotationValue.setValue(0);
      navigation.navigate('Result',{ chara });
    });
  };

  const interpolatedRotateAnimation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const imageStyle = {
    transform: [{ rotate: interpolatedRotateAnimation }],
  };


  return(
  <TouchableOpacity style={styles.container} onPress={rotateImage} activeOpacity={1}>
      <LinearGradient
        colors={['transparent','rgba(255,255,255,1)']}
        style={styles.background}
      />
      <Image
        source={require("../assets/img/nohandle.png")}
        style={{ width: 350, height: 453,position:"absolute",top:200,left:14,zIndex:10}}
      />
      <Animated.Image
        source={require("../assets/img/handle.png")}
        style={[styles.image,imageStyle]}
      />
      <View style={{width:"100%",height:200,backgroundColor:"#6F6F6F",position:"absolute",top:"73%",}}></View>
  </TouchableOpacity>
    
  )
}

function GatyaMachine2({route,navigation}){
  const { chara } = route.params;
  const rotationValue = useRef(new Animated.Value(0)).current;
  const rotateImage = () => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      rotationValue.setValue(0);
      navigation.navigate('Result2',{ chara });
    });
  };

  const interpolatedRotateAnimation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const imageStyle = {
    transform: [{ rotate: interpolatedRotateAnimation }],
  };


  return(
    <TouchableOpacity style={styles.container} onPress={rotateImage} activeOpacity={1} >
      <LinearGradient
        colors={['transparent','rgba(255,255,255,1)']}
        style={styles.background}
      />
      <Image
        source={require("../assets/img/nohandle.png")}
        style={{ width: 350, height: 453,position:"absolute",top:200,left:14,zIndex:10}}
      />
      <Animated.Image
        source={require("../assets/img/handle.png")}
        style={[styles.image,imageStyle]}
      />
      <View style={{width:"100%",height:200,backgroundColor:"#6F6F6F",position:"absolute",top:"73%",}}></View>
    </TouchableOpacity>
  )
}

const Stack = createNativeStackNavigator();

function Test2() {
  return (
      <Stack.Navigator initialRouteName="Home"  
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={GatyaHome} />
        <Stack.Screen name="Machine" component={GatyaMachine} />
        <Stack.Screen name="Result" component={GatyaResult} />
        <Stack.Screen name="Machine2" component={GatyaMachine2} />
        <Stack.Screen name="Result2" component={GatyaResult2} />
      </Stack.Navigator>
  );
}

export default Test2;

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
  text:{
    color: '#2D4582',
    fontWeight:"bold",
    fontSize:20
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
  image: {
    position:"absolute",
    zIndex:20,
    top:490,
    left:144,
  },
});