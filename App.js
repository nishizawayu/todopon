import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/Todo';
import Top from './components/Top';
import Gatya from './components/Gatya';

export default function App() {
  return (
    <>
    <Gatya />
      <View style={styles.container}>
        <Text>かす</Text>
      </View>
    </>
    
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
