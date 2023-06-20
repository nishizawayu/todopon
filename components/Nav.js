import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TodoList from './Todo';

function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createMaterialBottomTabNavigator();

  function Nav() {
    const Todo = ()=>{
        return(
            <TodoList/> 
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
          name="SettingsScreen"
          component={SettingsScreen}
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
              component={SettingsScreen}
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