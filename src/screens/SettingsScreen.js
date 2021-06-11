import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button
        title="Go to Feed"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default SettingsScreen