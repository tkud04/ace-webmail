import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { SplashScreen, AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InboxStack from './navigation/InboxStack';
import DraftsStack from './navigation/DraftsStack';
import SentStack from './navigation/SentStack';
import MoreStack from './navigation/MoreStack';



import * as helpers from './Helpers';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
	 <NavigationContainer>
      <Tab.Navigator
	    initialRouteName="InboxStack"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
        		
	  >
       <Tab.Screen
        name="InboxStack"
        component={InboxStack}
        options={{
          tabBarLabel: 'Inbox',  
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="inbox" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="DraftsStack"
        component={DraftsStack}
        options={{
          tabBarLabel: 'Drafts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="SentStack"
        component={SentStack}
        options={{
          tabBarLabel: 'Sent',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="MoreStack"
        component={MoreStack}
        options={{
          tabBarLabel: 'More',
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
