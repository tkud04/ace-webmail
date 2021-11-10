import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, ActivityIndicator, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';

import * as helpers from '../Helpers';

 import ListItem from '../components/ListItem.js';
 import Checkbox from '../components/Checkbox.js';

 import  UserContext from '../contexts/UserContext';
 


function InboxMessageScreen({route,navigation}){

   const [isLoading, setLoading] = useState(false);
   const uc = useContext(UserContext);
   console.log('route.params: ',route.params);
  const { item } = route.params;
   
   
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
	  console.log('item: ',item);
    // Fetch inbox if possible
	//console.log(`fetching new mail..`);
	if(isLoading){
    
	}
  });
  

  
	return (
	   <View style={styles.container}>   
		 <View style={styles.empty}>
		   <Text style={styles.emptyText}>Your message will be displayed here</Text>
		 </View>
	   </View>
	);
}


const styles = StyleSheet.create({
  container: {
	backgroundColor: '#fff',
	marginTop: StatusBar.currentHeight || 0,
	width: '100%',
	height: '100%',
	flex: 1
  },
  listButton: {
	  
  },
  empty: {
	  padding: 5, 
	  alignItems: 'center'
  },
  emptyText: {
	  color: '#f00',
      fontSize: 15
  },
});

export default InboxMessageScreen;