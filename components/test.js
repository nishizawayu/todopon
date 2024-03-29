import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const Test = () => {
  const [loginDate, setLoginDate] = useState(null);
  const [loginCount, setLoginCount] = useState(0);

  useEffect(() => {
    // ユーザーのログイン情報をローカルストレージから取得
    getLoginInfoFromStorage();
  }, []);

  const getLoginInfoFromStorage = async () => {
    try {
      // ローカルストレージからログイン情報を取得
      const loginData = await AsyncStorage.getItem('loginData');
      if (loginData) {
        const { loginDate: date, loginCount: count } = JSON.parse(loginData);
        setLoginDate(date);
        setLoginCount(count);
      }
    } catch (error) {
      console.error('Error getting login info:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const currentDate = moment().format('YYYY-MM-DD');
      let count = loginCount;
      if (loginDate !== currentDate) {
        count++;
      }
      // ローカルストレージにログイン情報を保存
      await AsyncStorage.setItem('loginData', JSON.stringify({ loginDate: currentDate, loginCount: count }));
      setLoginDate(currentDate);
      setLoginCount(count);
      // ログインボーナス処理
      handleLoginBonus(count);
    } catch (error) {
      console.error('Error saving login info:', error);
    }
  };

  const handleLoginBonus = (count) => {
    // ここでログインボーナスの処理を行う
    // ログイン日数に応じて適切なボーナスを与える
    if (count === 1) {
      alert('1日目のログインボーナス：アイテムAを獲得！');
    } else if (count === 2) {
      alert('2日目のログインボーナス：アイテムBを獲得！');
    } else if (count === 3) {
      alert('3日目のログインボーナス：アイテムCを獲得！');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ログイン日数：{loginCount}</Text>
      <Button title="ログイン" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Test;
