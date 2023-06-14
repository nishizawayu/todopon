import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';
import Calendars from './components/Calender';

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
