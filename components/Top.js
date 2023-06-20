import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Top() {

    return (
        <>
        <Image
          style={{
            width: 370,
            height: 179
          }}
          source={require('../assets/img/logo.png')}
        />
        <Image
          style={{
            width: 250,
            height: 380
          }}
          source={require('../assets/img/gatya_top.png')}
        />
                <Image
          style={{
            width: 390,
            height: 231
          }}
          source={require('../assets/img/table.jpg')}
        />
        </>
    );
  }
  
  const styles = StyleSheet.create({
  }
  );