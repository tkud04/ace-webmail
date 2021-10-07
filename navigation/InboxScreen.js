import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';

import * as helpers from '../Helpers';
import ListItem from '../components/ListItem.js';
import HeaderBar from '../components/HeaderBar';

 const showMessage = (id) => {
	 console.log(`Showing email with id ${id}`);
  };
 
 const renderItem = ({ item }) => {
   // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //  const color = item.id === selectedId ? 'white' : 'black';

    return (
	 <Pressable
	   onPress={() =>{showMessage(item.id)}}
	   style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(0, 0, 0)'
              : 'white'
          },
          styles.listButton
        ]}
	 >
      <ListItem
        item={item}
        backgroundColor="#6e3b6e"
      />
	 </Pressable>
    );
  };

function InboxScreen(){
	
	const [inbox, setInbox] = useState(helpers.getInbox());
   

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Fetch inbox if possible
	setInterval(() => {
	//console.log(`fetching new mail..`);
    let fi = helpers.fetchInbox();
	//console.log('fi: ',fi);
	},5000);
  });
  
	return (
	   <View style={styles.container}>
	   <HeaderBar/>
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