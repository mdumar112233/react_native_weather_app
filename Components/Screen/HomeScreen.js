import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import { Card, Title } from 'react-native-paper';

export default function HomeScreen({route}) {
  const cityName = route.params;

  console.log(cityName.cityName);
  const city = cityName.cityName;
  // const [newCity, setNewCity] = useState('');
  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading'
  })

  // console.log(newCity);
  
  const getWeatherInfo = () => {
    // const newCity = await AsyncStorage.getItem('city')
    
    // setNewCity(newCity)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d825fefc881cc1b02b7cc6f6898833e`)
    .then(res => res.json())
    .then(data => setInfo({
      name: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
    }))
  }
 
  useEffect( () => {
    getWeatherInfo();
  }, [city] )
  return (
    <View>
      {/* <Header/> */}
      {/* <Text>This home screen</Text> */}
      <Card style={{margin: 20, alignItems: 'center', padding: 20}}>
        <Title>City : {info.name}</Title>
        <Title>Temp : {info.temp}</Title>
        <Title>Humidity : {info.humidity}</Title>
        <Title>Description : {info.desc}</Title>
        <Image 
          style={{width: 50, height: 50, alignItems: 'center'}}
          source={{uri:`http://openweathermap.org/img/w/${info.icon}.png`}}
        />
      </Card>
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
