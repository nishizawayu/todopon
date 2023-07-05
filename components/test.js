// App.js

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function Test() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TodoList({ navigation }) {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [count, setCount] = useState(0);

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

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  const cong = () => {
    setCount(count + 100);
    console.log(count);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require('../assets/img/medal.png')}
          style={{ width: 60, height: 60, marginTop: 55, position: "absolute", right: 120 }}
        />
        <Text style={styles.medal}>{count}</Text>
      </View>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => [completeTask(index), cong()]}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD384',
  },

  imgstyle: {
    width: 40,
    height: 40,
  },
  medal: {
    width: 100,
    marginTop: 70,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
    fontSize: 20,
    position: 'absolute',
    right: 30,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    zIndex: -1,
    overflow: "hidden",
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 60,
  },
  writeTaskWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFAB73",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFAB73',
    borderWidth: 1,
  },
  addText: {
    fontSize: 35,
    color: "#fff"
  },

});
