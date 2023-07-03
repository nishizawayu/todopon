import { View, Image, StyleSheet, Button, Text, TouchableOpacity} from "react-native";
import Data from "../data.json"
import React,{useState} from 'react';

export default function Gatya() {
  const [chara, setChara] = useState('');
  
  const charaResult = [];
  const generateRandom10Chara = () => {
    const star1Chara = ['丹羽長秀', '本田忠勝', '前田利家', '明智光秀', '石田三成', '宇喜多秀家', '松永久秀', '斎藤道三', '黒田官兵', '衛高山右近'];
    const star2Chara = ['伊達政宗', '柴田勝家', '上杉謙信', '武田信玄', '毛利元就', '真田幸村', '島津義弘'];
    const star3Chara = ['織田信長', '徳川家康', '豊臣秀吉'];
    const star1Prob = 82;
    const star2Prob = 96;
    const star1CharaTotal = 10;
    const star2CharaTotal = 7;
    const star3CharaTotal = 3;


    for (let i = 0; i < 10; i++) {
      const randomStarNum = Math.floor(Math.random() * 100);
      if (randomStarNum <= star1Prob) {
        const randomStar1CharaNum = Math.floor(Math.random() * star1CharaTotal);
        charaResult.push("★-" + star1Chara[randomStar1CharaNum]);
      } else if (randomStarNum <= star2Prob) {
        const randomStar2CharaNum = Math.floor(Math.random() * star2CharaTotal);
        charaResult.push("★★-" + star2Chara[randomStar2CharaNum]);
      } else {
        const randomStar3CharaNum = Math.floor(Math.random() * star3CharaTotal);
        charaResult.push("★★★-" + star3Chara[randomStar3CharaNum]);
      }
    }
    setChara(charaResult.join(", "));
    return charaResult;
    
  }
  console.log(chara);

    return (
      <>
      <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <Button style={{marginTop:100}} onPress={generateRandom10Chara} title="10連ガチャシミュレータ" />
        </View> */}
      <TouchableOpacity style={styles.button} onPress={generateRandom10Chara}>
        <Text>10連ガチャシミュレータ</Text>
      </TouchableOpacity>
          <Text>結果: {chara}</Text>
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20,
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
  });
