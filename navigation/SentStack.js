import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SentScreen from './SentScreen.js';
 import SentMessageScreen from './SentMessageScreen.js';

import HeaderBar from '../components/HeaderBar';
import MessageHeaderBar from '../components/MessageHeaderBar';
import EditMessageHeaderBar from '../components/EditMessageHeaderBar';
 
 
 
 
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
	   <Stack.Screen 
	      name="SentMessage" 
		  component={SentMessageScreen}
		  options={{
            headerTitle: (props) => <MessageHeaderBar l="sent" {...props} />
          }}
	    />
	   </Stack.Navigator>
	);
}


export default SentStack;