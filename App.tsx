import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {Routes, theme} from './src';

export default function App() {
  return (
   <ThemeProvider theme={theme}>
     <StatusBar style="auto" />
     <Routes />
   </ThemeProvider>
  );
}

