import { View, Image, StyleSheet, Button, Text, TouchableOpacity,FlatList} from "react-native";
import Data from "../data.json"
import React,{useState} from 'react';

export default function Gatya() {
  const [chara, setChara] = useState('');
  
  const charaResult = [];
    const star1Chara = [require("../assets/img/chicken_1.png"),require("../assets/img/chicken_2.png"),require("../assets/img/chicken_3.png"),require("../assets/img/chicken_4.png")];
    const star2Chara = [require("../assets/img/pig_1.png"),require("../assets/img/pig_2.png"),require("../assets/img/pig_3.png"),require("../assets/img/pig_4.png")];
    const star3Chara = [require("../assets/img/card_1.png"),require("../assets/img/card_2.png"),require("../assets/img/card_3.png"),require("../assets/img/card_4.png")];
    const star1Prob = 82;
    const star2Prob = 96;
    const star1CharaTotal = 4;
    const star2CharaTotal = 4;
    const star3CharaTotal = 4;

  const generateRandom10Chara = () => {
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

  const generateRandomChara = () => {
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

  console.log(chara);
  const renderImageItem = ({ item }) => (
    <Image
      source={item}
      style={{ width: 60, height: 60, margin: 5 }}
    />
  );
    return (
      <>
      <View style={styles.container}>
      <View >
      <FlatList
        data={chara}
        numColumns={5} // 表示する列数を設定してください
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImageItem}
        style={{height:"50%"}}/>
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button style={{marginTop:100}} onPress={generateRandom10Chara} title="10連ガチャシミュレータ" />
        </View> */}
    </View>
    <View
     style={{
      flex:1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:"flex-end",
      height:120
     }}>
    <TouchableOpacity style={styles.button} onPress={generateRandomChara}>
        <Text>ガチャ</Text>
    </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={generateRandom10Chara}>
        <Text>10連ガチャ</Text>
      </TouchableOpacity>
    </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',

    },
    button: {
      flexGrow: 0.8,
      height: 60,
    },
  });
