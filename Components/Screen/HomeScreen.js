import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../Header';

export default function HomeScreen() {
  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading'
  })
  console.log(info);

  const getWeatherInfo = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=2d825fefc881cc1b02b7cc6f6898833e`)
    .then(res => res.json())
    .then(data => setInfo({
      name: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
    }))
  }

  useEffect(() => {
    getWeatherInfo();
  }, [])
  return (
    <View>
      {/* <Header/> */}
      <Text>This home screen</Text>
      <Text>{info.name}</Text>
      <Text>{info.temp}</Text>
      <Text>{info.humidity}</Text>
      <Text>{info.desc}</Text>
      <Image source={info.icon} />
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
