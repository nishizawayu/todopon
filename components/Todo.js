import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from './Task';
import { KeyboardAvoidingView } from 'react-native';
 
function TodoList() {

  const [task,setTask]= useState("");
  const [taskItems,settaskItems] = useState([]);

  const handleAddTask = ()=>{
      settaskItems([...taskItems,task]);
      setTask("");
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1) 
    settaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>today's tasks</Text>

          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item,index)=>{
                return (
                  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
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
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
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
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addText:{

  },

}
);
export default TodoList;
