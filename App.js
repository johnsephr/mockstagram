import 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import FeedScreen from './src/screens/FeedScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import SettingsScreen from './src/screens/SettingsScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end'

  }
});

export default App