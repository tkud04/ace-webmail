import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';

import * as helpers from '../Helpers';

 import ListItem from '../components/ListItem.js';
import  UserContext from '../contexts/UserContext';
 
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

function SentScreen(){

   const [isLoading, setLoading] = useState(true);
   const [sent, setSent] = useState([]);
   const [reload, setReload] = useState(false);
   const uc = useContext(UserContext);
   
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
	  //console.log('uc: ',uc);
    // Fetch sent if possible
	//console.log(`fetching new mail..`);
	if(isLoading){
    let fi = helpers.fetchMessages({u: uc.u, tk: uc.tk, l: "sent"});
	fi.then(d => {
		//console.log("d: ",d);
		setSent(d);
		setLoading(false);
		})
	  .catch(e => console.log(e));
	}
  });
  
  useEffect(() => {
	  //console.log('uc: ',uc);
    // Fetch sent if possible
	//console.log(`fetching new mail..`);
	if(reload){
    let fi = helpers.fetchMessages({u: uc.u, tk: uc.tk, l: "sent"});
	fi.then(d => {
		setSent(d);
		setReload(false);
		})
	  .catch(e => console.log(e));
	}
  });
  
	return (
	   <View style={styles.container}>
		   {
		   sent.length > 0 ?
	     <FlatList
           data={sent}
           renderItem={renderItem}
           keyExtractor={(item) => `msg-${item.id}`}
         />
		 :
		 <View style={styles.empty}>
		   <Text style={styles.emptyText}>Messages in your Sent folder will be displayed here</Text>
		 </View>
		   }
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

export default SentScreen;