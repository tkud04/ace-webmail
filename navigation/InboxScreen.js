import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, ActivityIndicator, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';

import * as helpers from '../Helpers';

 import ListItem from '../components/ListItem.js';
 import Checkbox from '../components/Checkbox.js';

 import  UserContext from '../contexts/UserContext';
 
 
 import  SelectedInboxContext from '../contexts/SelectedInboxContext';
 import { SelectedInboxProvider } from '../contexts/SelectedInboxContext';

function InboxScreen(){

   const [isLoading, setLoading] = useState(true);
   const [inbox, setInbox] = useState([]);
   const [reload, setReload] = useState(false);
   const uc = useContext(UserContext);


    const renderItem = ({ item }) => {
   // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //  const color = item.id === selectedId ? 'white' : 'black';
   
    return (
	 
	  <View >
	    
        <ListItem
          item={item}
          backgroundColor="#6e3b6e"
		  cc={
			  <View style={{marginRight: 5, marginTop: 5,alignItems: "flex-end"}}>
               <Checkbox id={item.id}/>
              </View>  
		  }
        />
		
	 </View>
	 
    );
  };
   
   
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

  useEffect(() => {
	  let l = [];
	for(let i = 0; i < inbox.length; i++){
      let ii = inbox[i];
	  l.push({id:ii.id,selected: false});
	}
	helpers.save('selected_inbox',JSON.stringify(l));
  });
  
  
	return (
	   <View style={styles.container}>
		   {
		   inbox.length > 0 ?
	     <FlatList
           data={inbox}
           renderItem={renderItem}
           keyExtractor={(item) => `msg-${item.id}`}
         />
		 :
		 <View style={styles.empty}>
		   <Text style={styles.emptyText}>Messages in your inbox will be displayed here</Text>
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

export default InboxScreen;