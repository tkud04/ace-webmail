import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpamScreen from './SpamScreen.js';
import SpamMessageScreen from './SpamMessageScreen.js';

import HeaderBar from '../components/HeaderBar';
 const Stack = createStackNavigator();


function SpamStack(){
  
	return (
	   <Stack.Navigator
	    initialRouteName="Spam"	
		screenOptions={{
        headerTitle: (props) => <HeaderBar {...props} />
      }}
	  >
	   <Stack.Screen name="Spam" component={SpamScreen} />
	   <Stack.Screen 
	      name="SpamMessage" 
		  component={SpamMessageScreen}
		  options={{
            headerTitle: (props) => <MessageHeaderBar l="spam" {...props} />
          }}
	    />
	   </Stack.Navigator>
	);
}


export default SpamStack;