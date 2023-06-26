import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image, } from 'react-native';
import Task from './Task';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
export default function TodoList() {
  
  const [task,setTask]= useState("");
  const [taskItems,settaskItems] = useState([]);
  const [count,setCount] = useState(0);

  const handleAddTask = ()=>{
      settaskItems([...taskItems,task]);
      setTask("");
  }

  const cong = ()=>{
    setCount(count + 100);
    console.log(count);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1) 
    settaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View>
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
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>

          <TouchableOpacity onPress={()=>handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>
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
    paddingTop:80,
    fontSize: 20,
    position:'absolute',
    right:30,
  },
  tasksWrapper:{
    paddingTop:100,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250,
    
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
