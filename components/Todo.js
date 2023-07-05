import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image,Button } from 'react-native';
import Task from './Task';
import Calendars from './Calender';
import { KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TodoList() {
  
  const [task,setTask]= useState("");
  const [taskItems,settaskItems] = useState([]);
  const [count,setCount] = useState(0);

    useEffect(() => {
      (async () => {
        const count = await AsyncStorage.getItem('count'); // 保存されたcount（文字列）の取得

        setCount(Number(count || 0)); // Numberにキャストしてインクリメント
      })();
    }, []);

    useEffect(() => {
      if (count) { 
        AsyncStorage.setItem('count', String(count)); // Stringにキャストして保存
      }
    }, [count]);

  const handleAddTask = ()=>{
      console.log("Enterが押されました。");
      settaskItems([...taskItems,task]);
      setTask("");
  }

  const handleButtonPress = () => {
    setShowTextBox(true);
  };

  const handleSaveText = () => {
    setShowTextBox(false);
  };

  // const handleCalender = () => {
  //   setShowCalender(false);
  // };

  // const handleCalenderBtn = () => {
  //   setShowCalender(true);
  // };

  const cong = ()=>{
    setCount(count + 100);
    console.log(count);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1) 
    settaskItems(itemsCopy);
  }

  const [showTextBox, setShowTextBox] = useState(false);
  const [showCalender , setShowCalender] = useState(false);

  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={{flexDirection: "row",}}>
          <Image
            source={require('../assets/img/medal.png')}
            style={{width:60,height:60,marginTop:55,position:"absolute",right:120 }}
          />
          <Text style={styles.medal}>{count}</Text>
        </View>
        <View style={styles.tasksWrapper}>
        <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item,index)=>{
                return (
                  <TouchableOpacity key={index} onPress={()=>[completeTask(index),cong()]}>
                      <Task text={item}/>
                  </TouchableOpacity>
                )
              })
            }
            {/* <Task text={'Task 1'}/>
            <Task text={'Task 2'}/> */}
          </View>
        </View>

        {/* Whire a task */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
        {!showTextBox && 
        <TouchableOpacity onPress={()=>handleButtonPress()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
        </TouchableOpacity>
        }
        {showTextBox && (
        <View>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onSubmitEditing={handleAddTask} onChangeText={text => setTask(text)}></TextInput>
          <Text onPress={()=>handleCalenderBtn()}>Calendar</Text>
          <Text onPress={()=>handleSaveText()}>close</Text>
        </View>
        )}
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD384',
  },

  imgstyle:{
    width:40,
    height:40,
  },
  medal:{
    width:100,
    marginTop:70,
    paddingTop:5,
    paddingBottom:5,
    textAlign:"center",
    fontSize: 20,
    position:'absolute',
    right:30,
    backgroundColor:"#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius:10,
    zIndex:-1,
    overflow: "hidden",
  },
  tasksWrapper:{
    paddingTop:60,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  items:{
    marginTop:60,
  },
  writeTaskWrapper:{
    position:'absolute',
    right:20,
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:350,
    justifyContent:'center',
    alignItems:'center',
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFAB73",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#FFAB73',
    borderWidth:1,
  },
  addText:{
    fontSize:35,
    color:"#fff"
  },

});
