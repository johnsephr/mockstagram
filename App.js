import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomTabNav from './src/components/BottomTabNav'

export default function App() {
  return (
    <View style={styles.container}>

      {/* Selected navTab screen here... */}

      <StatusBar style="auto" />
      <BottomTabNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end'
    
  }
});
