import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InboxScreen from './InboxScreen.js';
 
import HeaderBar from '../components/HeaderBar';
 
 
 const Stack = createStackNavigator();


function InboxStack(){
  
	return (
	   <Stack.Navigator
	    initialRouteName="Inbox"	
		screenOptions={{
        headerTitle: (props) => <HeaderBar {...props} />
      }}
	  >
	   <Stack.Screen name="Inbox" component={InboxScreen} />
	   </Stack.Navigator>
	);
}


export default InboxStack;