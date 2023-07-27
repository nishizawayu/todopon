import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Image} from "react-native";
import { CheckBox } from 'react-native-elements';

const Task = (props) =>{
    console.log(props.value);
    const [checked, setCheck] = useState(false);
    useEffect(()=>{
        if(checked){
            props.checkarr.push(checked);
            props.checknum.push(props.id);
            props.checknum.sort(function(first, second){
                if (first > second){
                  return 1;
                }else if (first < second){
                  return -1;
                }else{
                  return 0;
                }
              });
            console.log(props.checkarr);
            {props.check(props.checkarr)};
            {props.num(props.checknum)};
        }
        else if(!checked){
            props.checkarr.splice(props.id,1);
            props.checknum.splice(props.id,1);
            console.log(props.checkarr);
            {props.check(props.checkarr)};
            {props.num(props.checknum)};
        }
    },
    [checked])
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <CheckBox
                onPress={() => setCheck(!checked)}
                checked={checked}
                />
                <View style={{width:190,}}>
                    <Text style={styles.itemText}>{props.text}</Text>
                    <Text style={styles.itemday}>{props.value}</Text>
                </View>
            </View>
            <View style={styles.circular}>
            <Image
            source={require('../assets/img/medal.png')}
            style={{width:30,height:30,position:'absolute',top:-5, right:40}}
            />
            <Text>×100</Text>
            </View>
            <View style={{borderBottomWidth:2,borderBottomColor:"#D9D9D9",width:"100%",position:"absolute",top:80,left:"4%",}}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        // backgroundColor:'#FFF',
        padding:15,
        // borderRadius:10,
        // borderBottomWidth:2,
        // borderBottomColor:"#D9D9D9",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10,
    },
    itemLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
    },
    square:{
        width:24,
        height:24,
        borderColor:"#000",
        borderWidth:2,
        borderRadius:50,
        opacity:0.4,
        marginLeft:5,
    },
    text:{
        maxWidth:'80%',
    },
    circular:{
        width:40,
        height:20,
    },
})

export default Task;