import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Gatya() {
  function getConfig() {
    return [
      { id: '大当たり', val: 1 },
      { id: '当たり', val: 10 },
      { id: 'はずれ', val: 89 },
    ];
  }
  function gachaRun(config) {

    const min = 1; // 最小値
    const max = 100; // 最大値

    // 乱数生成（抽選）
    const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;

    let result = [];
    let totalProb = 0;
    for (let i = 0; i < config.length; i++) {
        totalProb += config[i].val;
        if( randomNum <= totalProb ) {
            result = config[i];
            break;
        } 
        return result;
    };
  }
  const config = getConfig();
  console.log(gachaRun(config));
    return (
        <>
        </>
    );
  }
  
  const styles = StyleSheet.create({
  }
  );