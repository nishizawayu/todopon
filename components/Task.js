import React from "react";
import {View,Text,StyleSheet, TouchableOpacity,Image} from "react-native";

const Task = (props) =>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>
            <Image
            source={require('../assets/img/medal.png')}
            style={{width:30,height:30,position:'absolute',top:-5, right:40}}
            />
            <Text>×100</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
    },
    itemText:{
        marginLeft:5,
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