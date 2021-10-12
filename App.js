import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import * as SplashScreen from 'expo-splash-screen';


import SplashScreen from './components/SplashScreen.js';

import AuthStack from './navigation/AuthStack';
import InboxStack from './navigation/InboxStack';
import DraftsStack from './navigation/DraftsStack';
import SentStack from './navigation/SentStack';
import MoreStack from './navigation/MoreStack';



import * as helpers from './Helpers';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	const [isAppReady, setIsAppReady] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [tk, setTk] = useState(null);
	
	
	useEffect(() => {
    async function prepare() {
      try {
        //make any API calls you need to do here
        //await Font.loadAsync(Entypo.font);
		let ttk = await helpers.getValueFor("ace_tk");
		console.log("ttk: ",ttk);
		setTk(ttk);
		if(tk != null) setIsLoggedIn(true);
		
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);
  

  if (!isAppReady) {
    return (
	  <SplashScreen/>
	);
  }
   let irn = loggedIn ? "InboxStack" : "AuthStack";
  return (
	 <NavigationContainer>
      <Tab.Navigator
	    initialRouteName={irn}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
        		
	  >
	  {loggedIn ? (
	  <>
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
            <MaterialCommunityIcons name="email-edit" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="SentStack"
        component={SentStack}
        options={{
          tabBarLabel: 'Sent',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email-send" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="MoreStack"
        component={MoreStack}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
	  </>
	  ) : (
	   <Tab.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          tabBarLabel: 'Sign in',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
	  )}
       
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
