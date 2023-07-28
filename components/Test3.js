import React, { useRef, useState } from 'react';
import { View, Animated, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const FallingImageAnimation = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const positionY = useRef(new Animated.Value(-100)).current;
  const positionX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const images = [require('../assets/img/capsule_blue.png'), require('../assets/img/capsule_red.png')];

  const startAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(positionY, {
          toValue: height / 1.5 - 50, // 画像の最終的な位置のY座標
          duration: 500, // アニメーションの時間（ミリ秒）
          useNativeDriver: true, // ネイティブ側でアニメーションを実行（パフォーマンス向上）
        }),
        Animated.timing(opacity, {
          toValue: 0.7, // 背景の薄暗さの値 (0から1までの範囲)
          duration: 1000, // アニメーションの時間（ミリ秒）
          useNativeDriver: false, // opacityのアニメーションのためネイティブ側ではなくJS側で処理
        }),
      ]),
      Animated.loop(
        Animated.sequence([
          Animated.timing(positionX, {
            toValue: -5,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(positionX, {
            toValue: 5,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(positionX, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 3 } // 3回繰り返す
      ),
      Animated.timing(opacity, {
        toValue: 0, // 背景を元に戻す（薄暗さを消す）
        duration: 500, // アニメーションの時間（ミリ秒）
        useNativeDriver: false, // opacityのアニメーションのためネイティブ側ではなくJS側で処理
      }),
    ]).start(() => {
      // アニメーションが終了したら、次の画像を表示する
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      // アニメーションが終わったら元の位置に戻す
      Animated.timing(positionY, {
        toValue: -100, // 画像を画面外に戻す
        duration: 1, // アニメーションの時間（ミリ秒）
        useNativeDriver: true, // ネイティブ側でアニメーションを実行（パフォーマンス向上）
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={startAnimation}>
        <Image source={require('../assets/img/card_1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <Animated.View style={[styles.overlay, { opacity }]} pointerEvents="none" />
      <Animated.View
        style={[
          styles.animatedImageContainer,
          {
            transform: [{ translateY: positionY }, { translateX: positionX }],
          },
        ]}
      >
        <Image source={images[imageIndex]} style={styles.image} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  button: {
    padding: 10,
  },
  buttonImage: {
    width: 100,
    height: 50,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  animatedImageContainer: {
    position: 'absolute',
    top: -200, // 画像が画面外から始まる位置のY座標
    left: width / 2 - 50, // 画像のX座標を中央に配置
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default FallingImageAnimation;
