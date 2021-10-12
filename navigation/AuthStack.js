import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen.js';
 
import HeaderBar from '../components/HeaderBar';
 
 
 const Stack = createStackNavigator();


function AuthStack(){
  
	return (
	   <Stack.Navigator
	    initialRouteName="Login"	
		screenOptions={{
       // headerTitle: (props) => <HeaderBar {...props} />
      }}
	  >
	   <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login to Ace Webmail' }}/>
	   </Stack.Navigator>
	);
}


export default AuthStack;