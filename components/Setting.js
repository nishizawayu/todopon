import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image,Button,KeyboardAvoidingView } from 'react-native';

const Setting = ()=>{
    return(
        <View style={{flex:1,}}>
            <View>
                <Text>
                    設定
                </Text>
            </View>
                {/* ボタン */}
                <View style={{flex:1,flexWrap:"wrap"}}>
                    {/* 赤 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()}>
                        <View style={styles.colorstyle}>
                            <View style={[styles.addWrapper,styles.btn.red]}>
                            </View>
                            <Text>
                                red
                            </Text>                    
                        </View>
                    </TouchableOpacity>
                    {/* 青 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()}>
                        <View style={styles.colorstyle}>
                            <View style={[styles.addWrapper,styles.btn.blue]}>
                            </View>
                            <Text>
                                blue
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                    {/* 緑 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()}>
                        <View style={styles.colorstyle}>
                            <View style={[styles.addWrapper,styles.btn.green]}>
                            </View>
                            <Text>
                                green
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* オレンジ */}
                    <TouchableOpacity onPress={()=>handleButtonPress()}>
                        <View style={styles.colorstyle}>
                            <View style={[styles.addWrapper,styles.btn.orange]}>
                            </View>
                            <Text>
                                orange
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 紫 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()}>
                        <View style={styles.colorstyle}>
                            <View style={[styles.addWrapper,styles.btn.magenta]}>
                            </View>
                            <Text>
                                magenta
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* グレー */}
                    <TouchableOpacity onPress={()=>handleButtonPress()}>
                        <View style={styles.colorstyle}>
                            <View style={[styles.addWrapper,styles.btn.gray]}>
                            </View>
                            <Text>
                                gray
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        orange:{
            backgroundColor: '#FFD384',
        },
        red:{
            backgroundColor: '#FCCACA',
        },
      },
      btn:{
          orange:{
            backgroundColor:"#FFAB73",
            borderColor:'#FFAB73',
          },
          red:{
            backgroundColor: '#F9AEAE',
            borderColor:'#F9AEAE',
          },
          blue:{
            backgroundColor: '#BEC5FF',
            borderColor:'#BEC5FF',
          },
          green:{
            backgroundColor:"#A5F1E9",
            borderColor:'#A5F1E9',
          },
          magenta:{
            backgroundColor: '#FDACFF',
            borderColor:'#FDACFF',
          },
          gray:{
            backgroundColor: '#D8D8D8',
            borderColor:'#D8D8D8',
          }
        
      },
      addWrapper:{
        width:60,
        height:60,
        borderRadius:60,
        borderWidth:1,
      },
      colorstyle:{
        alignItems:"center", 
        width:"33%",      
      },

})

export default Setting;