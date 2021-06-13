import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default SearchScreen