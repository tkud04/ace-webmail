import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InboxScreen from './InboxScreen.js';
import InboxMessageScreen from './InboxMessageScreen.js';
 
import HeaderBar from '../components/HeaderBar';
import MessageHeaderBar from '../components/MessageHeaderBar';
 
 
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
	   <Stack.Screen 
	      name="InboxMessage" 
		  component={InboxMessageScreen}
		  options={{
        headerTitle: (props) => <MessageHeaderBar {...props} />
      }}
		  />
	   </Stack.Navigator>
	);
}


export default InboxStack;