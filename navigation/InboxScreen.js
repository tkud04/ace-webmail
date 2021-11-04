import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, ActivityIndicator, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';

import * as helpers from '../Helpers';

 import ListItem from '../components/ListItem.js';
import  UserContext from '../UserContext';


 const renderItem = ({ item }) => {
   // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //  const color = item.id === selectedId ? 'white' : 'black';

    return (
	 
      <ListItem
        item={item}
        backgroundColor="#6e3b6e"
      />
	 
    );
  };

function InboxScreen(){

   const [isLoading, setLoading] = useState(true);
   const [inbox, setInbox] = useState([]);
   const [reload, setReload] = useState(false);
   const uc = useContext(UserContext);
   
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
	  //console.log('uc: ',uc);
    // Fetch inbox if possible
	//console.log(`fetching new mail..`);
	if(isLoading){
    let fi = helpers.fetchMessages({u: uc.u, tk: uc.tk, l: "inbox"});
	fi.then(d => {
		//console.log("d: ",d);
		setInbox(d);
		setLoading(false);
		})
	  .catch(e => console.log(e));
	}
  });
  
  useEffect(() => {
	  //console.log('uc: ',uc);
    // Fetch inbox if possible
	//console.log(`fetching new mail..`);
	if(reload){
    let fi = helpers.fetchMessages({u: uc.u, tk: uc.tk, l: "inbox"});
	fi.then(d => {
		setInbox(d);
		setReload(false);
		})
	  .catch(e => console.log(e));
	}
  });
  
	return (
	   <View style={styles.container}>
	  
	     <FlatList
           data={inbox}
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
         />
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
	  
  }
});

export default InboxScreen;