import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InboxScreen from './InboxScreen.js';
import InboxMessageScreen from './InboxMessageScreen.js';
import InboxEditMessageScreen from './InboxEditMessageScreen.js';
import ComposeScreen from './ComposeScreen.js';
 
import HeaderBar from '../components/HeaderBar';
import MessageHeaderBar from '../components/MessageHeaderBar';
import EditMessageHeaderBar from '../components/EditMessageHeaderBar';
import ComposeHeaderBar from '../components/ComposeHeaderBar';
 
 const Stack = createStackNavigator();


function InboxStack(){
  
	return (
	   <Stack.Navigator
	    initialRouteName="Inbox"	
		screenOptions={{
        headerTitle: (props) => <HeaderBar l="inbox" {...props} />
      }}
	  >
	    <Stack.Screen name="Inbox" component={InboxScreen} />
	    <Stack.Screen 
	      name="InboxMessage" 
		  component={InboxMessageScreen}
		  options={{
            headerTitle: (props) => <MessageHeaderBar l="inbox" {...props} />
          }}
	    />
		<Stack.Screen 
	      name="InboxEditMessage" 
		  component={InboxEditMessageScreen}
		  options={{
            headerTitle: (props) => <EditMessageHeaderBar {...props} />
          }}
	    />
		<Stack.Screen 
	      name="Compose" 
		  component={ComposeScreen}
		  options={{
            headerTitle: (props) => <ComposeHeaderBar {...props} />
          }}
	    />
	   </Stack.Navigator>
	);
}


export default InboxStack;