import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image,Button } from 'react-native';
import Task from './Task';
import Calendars from './Calender';
import { KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; 

dayjs.locale("ja");

export default function TodoList() {
  
  const [task,setTask]= useState("");
  const [taskItems,settaskItems] = useState([]);
  const [count,setCount] = useState(0);
  const [value,setValue] = useState("");
  const [daydata,setDaydata] = useState(dayjs().format('MM月DD日 dddd'));
  const [arrdata,setArrdata] = useState([]);

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
    console.log(value);
    // バグ
    if(!value){
      console.log("Enterが押されました。");
      arrdata.push(""); 
      console.log(arrdata);
      setArrdata(arrdata);
    }
      settaskItems([...taskItems,task]);
      setTask("");
      setShowTextBox(false);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    let valeCopy = [...arrdata];
    itemsCopy.splice(index,1)
    valeCopy.splice(index,1)
    console.log(valeCopy); 
    settaskItems(itemsCopy);
    setArrdata(valeCopy);
  }

  const handleButtonPress = () => {
    setShowTextBox(true);
    setClenderbtn(false);
  };

  const cong = ()=>{
    setCount(count + 100);
    console.log(count);
  }



  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
    setClenderbtn(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const savedata = () => {
    console.log("ごみ");
    arrdata.push(value); 
    console.log(arrdata);
    setModalVisible(false);
    setArrdata(arrdata);
  };

  const [showTextBox, setShowTextBox] = useState(false);
  const [Clenderbtn,setClenderbtn] = useState(false);
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
                      <Task text={item} value={arrdata[index]}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        {/* Whire a task */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
        {!showTextBox && 
        <View style={{width:"100%",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={()=>handleButtonPress()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.trash}>
              <Text style={styles.trashText}>ゴミ箱</Text>
            </View>
          </TouchableOpacity>
        </View>
        }
        {showTextBox && (
        <View>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onSubmitEditing={handleAddTask} onChangeText={text => setTask(text)}></TextInput>

          <TouchableOpacity onPress={handleOpenModal}>
            <View>
            {Clenderbtn &&(
              <Text>
                {daydata}
              </Text>
              )
            }
            {!Clenderbtn &&(
              <Text>
                  期限・通知
              </Text>
              )
            }
            </View>
          </TouchableOpacity>

            <Modal
              isVisible={modalVisible}
              onBackdropPress={handleCloseModal}
              backdropOpacity={0.5}
              animationIn="slideInUp"
              animationOut="slideOutDown"
              style={styles.modal}
            >
              <View style={styles.modalContent}>
                <Calendars data = {setValue} day={setDaydata} hozon={savedata} kyansel={handleCloseModal}/>
                <Button title="保存" onPress={savedata} />
                <Button title="キャンセル" onPress={handleCloseModal} />
              </View>
            </Modal>


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
    flexDirection:"row",
    justifyContent:"space-between",
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
    position:"absolute",
    right:10,
    bottom:-30,
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

  trash:{
    position:"absolute",
    left:45,
    bottom:-30,
    width:60,
    height:60,
    backgroundColor:"#B6B6B6",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#B6B6B6',
    borderWidth:1,
  },
  trashText:{
    fontSize:13,
    color:"#fff"
  },
  modal: {
    justifyContent: 'flex-first',
    marginTop: 60,
  },
  modalContent: {
    height:700,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
  },

});
