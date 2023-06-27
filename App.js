import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import Nav from './components/Nav';

export default function App(){
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

return(
  <SafeAreaProvider>
    <Nav />
  </SafeAreaProvider>
)
}