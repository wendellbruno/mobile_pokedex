import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {Routes, theme, PokeProvider} from './src';
import { useContext } from 'react';


export default function App() {

  return (
   <ThemeProvider theme={theme}>
    <PokeProvider>
     <StatusBar style="auto" />
     <Routes />
     </PokeProvider>
   </ThemeProvider>
  );
}

