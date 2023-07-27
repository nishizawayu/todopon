import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image,Button,KeyboardAvoidingView } from 'react-native';

const Setting = ()=>{
    const [redbtn,setredbtn]=useState();
    return(
        <View style={{flex:1,paddingTop:20,}}>
            <View style={{width:"80%",backgroundColor:"#fff",borderColor:"#FFAF37",borderWidth:2,marginHorizontal:30,justifyContent:"center",borderRadius:10,paddingVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>
                    設定
                </Text>
            </View>
                {/* ボタン */}
                <View style={{flexWrap:"wrap",flexDirection:"row",paddingTop:120}}>
                    {/* 赤 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()} style={styles.colorstyle}>
                        <View style={{alignItems:"center"}}>
                            <View style={[styles.addWrapper,styles.btn.red]}>
                            </View>
                            <Text style={styles.colortext}>
                                red
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 青 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()} style={styles.colorstyle}>
                        <View style={{alignItems:"center"}}>
                            <View style={[styles.addWrapper,styles.btn.blue]}>
                            </View>
                            <Text style={styles.colortext}>
                                blue
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                    {/* 緑 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()} style={styles.colorstyle}>
                        <View style={{alignItems:"center"}}>
                            <View style={[styles.addWrapper,styles.btn.green]}>
                            </View>
                            <Text style={styles.colortext}>
                                green
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* オレンジ */}
                    <TouchableOpacity onPress={()=>handleButtonPress()} style={styles.colorstyle}>
                        <View style={{alignItems:"center"}}>
                            <View style={[styles.addWrapper,styles.btn.orange]}>
                            </View>
                            <Text style={styles.colortext}>
                                orange
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 紫 */}
                    <TouchableOpacity onPress={()=>handleButtonPress()} style={styles.colorstyle}>
                        <View style={{alignItems:"center"}}>
                            <View style={[styles.addWrapper,styles.btn.magenta]}>
                            </View>
                            <Text style={styles.colortext}>
                                magenta
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* グレー */}
                    <TouchableOpacity onPress={()=>handleButtonPress()} style={styles.colorstyle}>
                        <View style={{alignItems:"center"}}>
                            <View style={[styles.addWrapper,styles.btn.gray]}>
                            </View>
                            <Text style={styles.colortext}>
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
        blue:{
            backgroundColor: '#BEC5FF',
        },
        green:{
            backgroundColor:"#A5F1E9",
        },
        magenta:{
            backgroundColor: '#FDACFF',
        },
        gray:{
            backgroundColor: '#D8D8D8',
        }
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
        paddingTop:20,
      },

      colortext:{
        fontSize:16,
        paddingTop:10,
      }

})

export default Setting;