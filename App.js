import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';
import Calendars from './components/Calender';
import Nav from './components/Nav';

export default function App() {
  return (
    <Calendars/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
