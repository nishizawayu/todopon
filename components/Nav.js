import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './Todo';
import Gatya from './Gatya';
import Test2 from './Test2';

  const Tab = createMaterialBottomTabNavigator();

  function Nav() {
    
    const Todo = ()=>{
        return(
            <TodoList/> 
        )
    }  
    const GatyaScreen = ()=>{
      return(
          <Gatya/> 
      )
    }

    const Library = () =>{
      return(
        <Test2/>
      )
    }

    return (
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#FFAF37"
          inactiveColor="#000"
          labelStyle={{ fontSize: 12,}}
          barStyle={{ backgroundColor: '#fff',height:100}}
        >
          <Tab.Screen
          name="Library"
          component={Library}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          options={{
            tabBarLabel: '図鑑',
            tabBarIcon: () => (
              <Image 
                  source={require('../assets/img/gallery.png')}
                  style={{width:35,height:30}}
              />
            ),
          }}
        />
          <Tab.Screen 
              name="Todo" 
              component={Todo}
              options={{
                  tabBarLabel: 'Todo',
                  tabBarIcon:() => (
                    <Image 
                      source={require('../assets/img/Todo.png')}
                      style={{width:35,height:30}}
                    />
                  ),
                }}
          />
          <Tab.Screen 
              name="ガチャ" 
              component={GatyaScreen}
              options={{
                  tabBarLabel: 'ガチャ',
                  tabBarIcon:() => (
                    <Image 
                      source={require('../assets/img/gatya.png')}
                      style={{width:35,height:30}}
                    />
                  ),
                }} 
          
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default Nav;