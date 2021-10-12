import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DraftsScreen from './DraftsScreen.js';

import HeaderBar from '../components/HeaderBar';
 const Stack = createStackNavigator();


function DraftsStack(){
  
	return (
	   <Stack.Navigator
	    initialRouteName="Drafts"	
		screenOptions={{
        headerTitle: (props) => <HeaderBar {...props} />
      }}
	  >
	   <Stack.Screen name="Drafts" component={DraftsScreen} />
	   </Stack.Navigator>
	);
}


export default DraftsStack;