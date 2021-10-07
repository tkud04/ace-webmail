import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { SplashScreen, AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InboxScreen from './navigation/InboxScreen';
import DraftsScreen from './navigation/DraftsScreen';



import * as helpers from './Helpers';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
	 <NavigationContainer>
      <Tab.Navigator
	    initialRouteName="Inbox"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}		
	  >
       <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: 'Inbox',  
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="inbox" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="Drafts"
        component={DraftsScreen}
        options={{
          tabBarLabel: 'Drafts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
	  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  transparent: {
    opacity: 0
  },
});
