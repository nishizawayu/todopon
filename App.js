import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';
import Calendars from './components/Calender';
import Nav from './components/Nav';
import Test from './components/test';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

export default function App(){
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);
  
  return(
    <SafeAreaProvider>
      <Nav/>
    </SafeAreaProvider>
  )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

