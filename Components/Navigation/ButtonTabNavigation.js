import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import SearchScreen from '../Screen/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const screenOptionsStyle ={
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}


export default function ButtonTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
               screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Weather information') {
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                  } else if (route.name === 'Weather search') {
                    iconName = focused ? 'search' : 'search';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
      >
        <Tab.Screen 
        options={screenOptionsStyle}
            name="Weather information" component={HomeScreen} />
        <Tab.Screen 
        options={screenOptionsStyle}
        name="Weather search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}