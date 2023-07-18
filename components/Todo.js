import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image,Button,KeyboardAvoidingView } from 'react-native';
import Task from './Task';
import Setting from './Setting';
import Calendars from './Calender';
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
  const [checked, setCheck] = useState([]); //checkbox用

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

  const completeTask = () =>{
    console.log(checked);
    let itemsCopy = [...taskItems];
    let valeCopy = [...arrdata];
    checked.map((item,index)=>{
      console.log(item);
      console.log(index);
      if(checked[index] == true){
        itemsCopy.splice(index,1);
        valeCopy.splice(index,1);
        checked.splice(index,1);
      }
    })
    // valeCopy.map((item,index)=>{
    //   if(checked[index] == true){
    //     valeCopy.splice(index,1);
    //   }
    // })
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
  const [modalVisible2, setModalVisible2] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
    setClenderbtn(true);
  };

  const handleOpenModal2 = () => {
    console.log("天才");
    setModalVisible2(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  const savedata = () => {
    arrdata.push(value); 
    console.log(arrdata);
    setModalVisible(false);
    setArrdata(arrdata);
  };

  const [showTextBox, setShowTextBox] = useState(false);
  const [Clenderbtn,setClenderbtn] = useState(false);

  return (
    <View style={[styles.container,styles.base.orange]}>
        {/* Today's Tasks */}
        <View style={{flexDirection: "row",}}>
          <TouchableOpacity onPress={()=>handleOpenModal2()}>
            <View style={{width:50,height:50,marginTop:60,}}>
              <Image
                source={require('../assets/img/setting.png')}
                style={{width:50,height:50,position:"absolute",left:30,}}
              />
            </View>
          </TouchableOpacity>
          
          <Modal
              isVisible={modalVisible2}
              onBackdropPress={handleCloseModal2}
              backdropOpacity={1}
              animationIn="slideInUp"
              animationOut="slideOutDown"
              style={styles.modal}
            >
              <View style={styles.modalContent}>
                <Setting/>
              </View>
          </Modal>
        </View>
        <View style={{flexDirection: "row",}}>
          <Image
            source={require('../assets/img/medal.png')}
            style={{width:60,height:60,marginTop:-45,position:"absolute",right:115 }}
          />
          <Text style={styles.medal}>{count}</Text>
        </View>
        <View style={styles.tasksWrapper}>
        <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item,index)=>{
                return (
                  <TouchableOpacity key={index}>
                    <Task text={item} value={arrdata[index]} check={setCheck} id={index} checkarr={checked}/>
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
        <View style={{width:"100%",justifyContent:"space-between",}}>
          <TouchableOpacity onPress={()=>handleButtonPress()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.trash}>
              <Text style={styles.trashText} 
              onPress={()=>completeTask()}>ゴミ箱</Text>
            </View>
          </TouchableOpacity>
        </View>
        }
        {showTextBox && (
        <View style={{justifyContent:"center",backgroundColor:"#D9D9D9",paddingHorizontal:20,paddingTop:30,paddingBottom:30,}}>
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
    // backgroundColor: '#FFD384',
  },

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
    
  },

  imgstyle:{
    width:40,
    height:40,
  },
  medal:{
    width:100,
    marginTop:-30,
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
    marginTop:0,
  },
  writeTaskWrapper:{
    position:'absolute',
    marginRight:30,
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
