import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as helpers from '../Helpers';
 import  UserContext from '../contexts/UserContext';

const NetworkStatusAlert = (props) => {
	 const uc = useContext(UserContext);
	 let txt = "Your device is offline", clr = "red";
	 if(uc.online){
		 txt = "Your device is online", clr = "green";
	 }
	return (
	 <View style={[styles.container,{backgroundColor: clr}]}>
	 <Text style={styles.alertText}>{txt}</Text>
     </View>
	);
}


const styles = StyleSheet.create({

  container: {
	  width: Dimensions.get('window').width,
	flexDirection: 'row',
	justifyContent: 'center',
  },
  alertText: {
	  padding: 5,
	  fontSize: 15,
	  color: "#fff",
	  alignItems: 'center'
  },
});

export default NetworkStatusAlert;
