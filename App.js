import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput, Button, Card, List } from 'react-native-paper';
import SearchScreen from './Components/Screen/SearchScreen';
import ButtonTabNavigation from './Components/Navigation/ButtonTabNavigation';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <SearchScreen/> */}
      <ButtonTabNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
