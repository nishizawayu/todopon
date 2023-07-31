import 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { countState } from './atom';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image,Button,KeyboardAvoidingView } from 'react-native';
import Task from './Task';
import Setting from './Setting';
import Calendars from './Calender';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import moment from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; 


dayjs.locale("ja");

export default function TodoList(props) {
  
  const [task,setTask]= useState("");
  const [taskItems,settaskItems] = useState([]);
  const [count,setCount] = useRecoilState(countState);
  const [value,setValue] = useState("");
  const [daydata,setDaydata] = useState(dayjs().format('MM月DD日 dddd'));
  const [arrdata,setArrdata] = useState([]);
  const [checked, setCheck] = useState([]); //checkbox用
  const [checknum , setChecknum] = useState([]);

  const saveData = async () => {
    try {
      // Convert the taskItems and count to JSON strings before saving
      const dataToSave = {
        taskItems: JSON.stringify(taskItems),
        count: JSON.stringify(count),
      };

      // Save the data to AsyncStorage
      await AsyncStorage.setItem('todoData', JSON.stringify(dataToSave));
      
      console.log('Data saved successfully.');
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };

  // Function to load data from AsyncStorage
  const loadData = async () => {
    try {
      // Retrieve the data from AsyncStorage
      const savedData = await AsyncStorage.getItem('todoData');
      if (savedData !== null) {
        const parsedData = JSON.parse(savedData);
        setCount(JSON.parse(parsedData.count));
        settaskItems(JSON.parse(parsedData.taskItems));
      }
    } catch (error) {
      console.log('Error loading data: ', error);
    }
  };

  const getLoginInfoFromStorage = async () => {
    try {
      // ローカルストレージからログイン情報を取得
      const loginData = await AsyncStorage.getItem('loginData');
      if (loginData) {
        const { loginDate: date, loginCount: count2 } = JSON.parse(loginData);
        setLoginDate(date);
        setLoginCount(count2);
      }
      
    } catch (error) {
      console.error('Error getting login info:', error);
    }
  };


  useEffect(() => {
    loadData();
    getLoginInfoFromStorage();
    handleLogin();
  }, []);

  useEffect(() => {
    if (count) {
      saveData();
    }
  }, [count,taskItems]);
  //   /////////////////////////////

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
    console.log(checknum);
    let itemsCopy = [...taskItems];
    let valeCopy = [...arrdata];
    let checkCopy = [...checknum];
    let counter = 0;
    let medal = 0;
    checknum.map((item,index)=>{
      console.log(item);
      console.log(index);
      if(checked[index] == true){
        // itemsCopy.splice(index,1);
        //バグ→inputタグがリセットされない

        itemsCopy.splice(checknum[index-counter],1);
        valeCopy.splice(checknum[index-counter],1);
        checkCopy.splice(checknum[index-counter],1);
        counter++;
        medal = medal+100;
        cong(medal);
      }
    })

    settaskItems(itemsCopy);
    setArrdata(valeCopy);
    setCheck([]);
    setChecknum(checkCopy);
    medal = 0;
    counter = 0;
    console.log(valeCopy); 
  }

  const handleButtonPress = () => {
    setShowTextBox(true);
    setClenderbtn(false);
  };

  const cong = (medal)=>{
    setCount(count +  medal);
    setModalVisible3(true);
    console.log(count);
  }



  const [loginDate, setLoginDate] = useState(null);
  const [loginCount, setLoginCount] = useState(0);

  const handleLogin = async () => {
    try {
      const currentDate = moment().format('YYYY-MM-DD');
      let count2 = loginCount;
      if (loginDate !== currentDate) {
        count2++;
        setCount(count + 100);
      }
      // ローカルストレージにログイン情報を保存
      await AsyncStorage.setItem('loginData', JSON.stringify({ loginDate: currentDate, loginCount: count2 }));
      setLoginDate(currentDate);
      setLoginCount(count2);
      // ログインボーナス処理
      handleLoginBonus(count2);
    } catch (error) {
      console.error('Error saving login info:', error);
    }
  };

  const handleLoginBonus = (count2) => {
    // ここでログインボーナスの処理を行う
    // ログイン日数に応じて適切なボーナスを与える
    if (count2 === 1) {
      // alert('1日目のログインボーナス：アイテムAを獲得！');
      setModalVisible2(true);
    } else if (count2 === 2) {
      // alert('2日目のログインボーナス：アイテムBを獲得！');
      setModalVisible2(true);
    } else if (count2 === 3) {
      // alert('3日目のログインボーナス：アイテムCを獲得！');
      setModalVisible2(true);
    }else if (count2 === 4) {
        // alert('4日目のログインボーナス：アイテムDを獲得！');
        setModalVisible2(true);
      }else if (count2 === 5) {
        // alert('5日目のログインボーナス：アイテムEを獲得！');
        setModalVisible2(true);
      }else if (count2 === 6) {
        // alert('6日目のログインボーナス：アイテムFを獲得！');
        setModalVisible2(true);
      }else if (count2 === 7) {
        // alert('7日目のログインボーナス：アイテムGを獲得！');
        setModalVisible2(true);
        count2 == 0;
        setLoginCount(count2);
      }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

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
  
  const handleCloseModal3 = () => {
    setModalVisible3(false);
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
        {/* <View style={{flexDirection: "row",}}>
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
              <View style={styles.modalContent2}>
                <Setting/>
              </View>
          </Modal>
        </View> */}
        <View style={{flexDirection: "row",marginTop:100}}>
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
                    <Task text={item} value={arrdata[index]} check={setCheck} id={index} checkarr={checked} checknum={checknum} num={setChecknum}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        <Modal
              isVisible={modalVisible3}
              onBackdropPress={handleCloseModal3}
              backdropOpacity={0.5}
              animationIn="slideInUp"
              animationOut="slideOutDown"
              style={styles.modal}
            >
              <View style={{marginTop:170,alignItems:"center"}}>
                <Text style={{fontSize:36,color:"#fff",position:"absolute",left:50,fontWeight:"700"}}>GET!</Text>
               <Image
                  source={require('../assets/img/medal.png')}
                  style={{width:150,height:150,marginTop:60,marginBottom:30}}
                />
                <View style={{backgroundColor:"#fff",paddingVertical:15,paddingHorizontal:40,borderRadius:5,}}>
                  <Text style={{fontSize:20,color:"#000",fontWeight:"700",}}>
                    メダルを獲得しました！！
                  </Text>
                </View>
              </View>
        </Modal>

        <Modal
          isVisible={modalVisible2}
          onBackdropPress={handleCloseModal2}
          backdropOpacity={0.5}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          style={styles.modal2}
        >
          <View style={{}}>
            <Image
                source={require('../assets/img/loginbonus1.png')}
                style={{width:295,height:230,position:"absolute",left:30,}}
            />
          </View>
        </Modal>

        {/* Whire a task */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
        {!showTextBox && 
        <View style={{width:"100%",justifyContent:"space-between",marginBottom:60,}}>
          <TouchableOpacity onPress={()=>handleButtonPress()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>completeTask()}>
            <View style={styles.trash}>
              <Image 
              source={require('../assets/img/trash.png')}
              style={styles.trashText}/>
            </View>
          </TouchableOpacity>
        </View>
        }
        {showTextBox && (
        <View style={{justifyContent:"center",backgroundColor:"#D9D9D9",paddingHorizontal:20,paddingTop:30,paddingBottom:30,}}>
          <TextInput style={styles.input} placeholder={'タスクを入力'} value={task} onSubmitEditing={handleAddTask} onChangeText={text => setTask(text)}></TextInput>

          <TouchableOpacity onPress={handleOpenModal}>
            <View style={{marginTop:10,borderColor:"#fff",borderWidth:1,width:100}}>
            {Clenderbtn &&(
              <Text style={{fontSize:16,marginHorizontal:10}}>
                {daydata}
              </Text>
              )
            }
            {!Clenderbtn &&(
              <Text style={{fontSize:16,marginHorizontal:10}}>
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
    marginTop:-30,
    backgroundColor:"#fff",
    borderRadius:12,
  },
  writeTaskWrapper:{
    position:'absolute',
    marginRight:30,
    bottom:0,
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
    borderRadius:10,
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

  modal: {
    justifyContent: 'flex-first',
    marginTop: 60,
  },
  modal2: {
    marginBottom: 280,

  },
  modalContent: {
    height:700,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
  },
  modalContent2: {
    height:700,
    backgroundColor: '#FFFBD9',
    padding: 16,
    borderRadius: 20,
  },

});
