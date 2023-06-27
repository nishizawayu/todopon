import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Test() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
      (async () => {
        const count = await AsyncStorage.getItem('count'); // 保存されたcount（文字列）の取得

        setCount(Number(count || 0) + 1); // Numberにキャストしてインクリメント
      })();
    }, []);

    useEffect(() => {
      if (count) { 
        AsyncStorage.setItem('count', String(count)); // Stringにキャストして保存
      }
    }, [count]);

    return <Text>{ `${count}` }</Text>; // countの表示
}
