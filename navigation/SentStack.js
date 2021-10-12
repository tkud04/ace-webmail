import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SentScreen from './SentScreen.js';
 
 import HeaderBar from '../components/HeaderBar';
 
 
 const Stack = createStackNavigator();


function SentStack(){
  
	return (
	   <Stack.Navigator
	    initialRouteName="Sent"
		screenOptions={{
        headerTitle: (props) => <HeaderBar {...props} />
      }}
	  >
	   <Stack.Screen name="Sent" component={SentScreen} />
	   </Stack.Navigator>
	);
}


export default SentStack;