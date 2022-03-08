import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/drawer'


export default function App() {
  return (
    <Navigator/>
  );
}