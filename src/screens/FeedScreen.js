import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FeedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default FeedScreen