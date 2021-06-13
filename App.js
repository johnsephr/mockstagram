import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components
import ProfilePhoto from './src/components/ProfilePhoto'

// screens
import FeedScreen from './src/screens/FeedScreen'
import SearchScreen from './src/screens/SearchScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import ReelsScreen from './src/screens/ReelsScreen'
import ShopScreen from './src/screens/ShopScreen'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let type;
            let profile = route.name === 'Profile';

            if (route.name === 'Feed') {
              iconName = 'home';
              type = 'Foundation';
            } else if (route.name === 'Search') {
              iconName = 'search1';
              type = 'AntDesign';
            } else if (route.name === 'Reels') {
              iconName = 'play-video';
              type = 'Foundation';
            } else if (route.name === 'Shop') {
              iconName = 'shopping';
              type = 'MaterialCommunityIcons'
            }

            // You can return any component that you like here!
            return (!profile ? <Icon name={iconName} size={size} type={type} color={color} /> : <ProfilePhoto />);
          },
        })}
        tabBarOptions={{
          // activeTintColor: 'tomato',
          // inactiveTintColor: 'gray',
          labelStyle: {
            display: 'none'
          }
        }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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