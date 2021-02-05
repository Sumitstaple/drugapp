import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Navigation from './navigation';


export default function App(){
  return(
    <NavigationContainer>
        <Navigation></Navigation>
    </NavigationContainer>
  );
}