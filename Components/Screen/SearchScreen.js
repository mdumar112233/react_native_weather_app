import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput, Button, Card, List } from 'react-native-paper';
import Header from '../Header';

export default function SearchScreen({navigation}) {
  const [city, setCity] = useState('');
  const [result, setResult] = useState({});
  let newResult = [];
    newResult.push(result);


  const fetchCity = (text) => {
    setCity(text)
    const key = '48c5f8a49a4940bb9a671031211008';
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
    .then(res => res.json())
    .then(data => setResult(data.location))
  }

  const handleBtn = async () => {
    navigation.navigate('Weather information', {
      cityName: city
    })
    const store = await AsyncStorage.setItem('city', city)
    console.log('store data',await AsyncStorage.getItem('city'));
  }

  return (
    <View>
      {/* <Header/> */}
      <TextInput label="Enter city name" onChangeText={text => fetchCity(text)}/>

      <Button style={{margin: 20}} mode="contained" onPress={handleBtn}>
      search
      </Button>

      {/* show city result */}
      {
        typeof(result) !== 'undefined' && newResult.length > 0 ?  newResult.map(res => <Card><List.Item 
          style={{backgroundColor: '#ddd', margin: 20}}
          title={res.country}
          key={res.key}
          description={res.region}
          // left={props => <List.Icon {...props} icon="folder" />}
        /></Card>) : <Text>search for result</Text>
      }
    </View>
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
