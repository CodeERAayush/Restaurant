import React from 'react';
import {View, StyleSheet,Text,StatusBar} from 'react-native';
import ListItem from './src/screens/ListPage'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/stackNavigator';
const App = () => {
  return (
   <NavigationContainer>
    <StackNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
