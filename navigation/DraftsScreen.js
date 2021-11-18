import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, View, Text, Pressable, RefreshControl, FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import * as helpers from '../Helpers';

 import ListItem from '../components/ListItem.js';
 import Checkbox from '../components/Checkbox.js';


 import  UserContext from '../contexts/UserContext';
 import { showMessage, hideMessage } from "react-native-flash-message";

 
 import  SelectedInboxContext from '../contexts/SelectedInboxContext';
 import { SelectedInboxProvider } from '../contexts/SelectedInboxContext';
 


function DraftsScreen({ navigation }){
	const [isLoading, setLoading] = useState(true);
   const [drafts, setDrafts] = useState([]);
   const [reload, setReload] = useState(false);
   const uc = useContext(UserContext);
    helpers.save('ace_current_label',"drafts"); 
   
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
		  l="sent"
        />
		
	 </View>
	 
    );
  };
  
  const reloadDrafts = () => {
	  let fi = helpers.fetchMessages({u: uc.u, tk: uc.tk, l: "drafts"}); 
	      fi.then(d => {
		    setDrafts(d);
		     setReload(false);
		  }).catch(e => {
			  let nm = "Your device is offline", ntt = "danger";
	         showMessage({
               message: nm,
               type: ntt,
             });
		  });
  }
  
  const getDrafts = () => { 
	   console.log("drafts: ", drafts);
	  if(drafts.length < 1){
		  console.log(`fetching new mail..`); 
		  reloadDrafts(); 
	  }
  }
   
   // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
	  //console.log('uc: ',uc);
    // Fetch sent if possible
	//console.log(`fetching new mail..`);
	if(isLoading){
      getDrafts();
	}
  });
  
  
    useEffect(() => {
	  let l = [];
	for(let i = 0; i < drafts.length; i++){
      let ii = drafts[i];
	  l.push({id:ii.id,selected: false});
	}
	helpers.save('selected_drafts',JSON.stringify(l));
  });
  
	
	return (
	   <View style={styles.container}>
		   {
		   drafts.length > 0 ?
	     <FlatList
           data={sent}
           renderItem={renderItem}
           keyExtractor={(item) => `msg-${item.id}`}
		   refreshControl={
             <RefreshControl
               refreshing={reload}
               onRefresh={() => {setReload(true); reloadDrafts()}}
             />
           }
         />
		 :
		 <ScrollView 
		   refreshControl={
             <RefreshControl
               refreshing={reload}
               onRefresh={() => {setReload(true); reloadDrafts()}}
             />
           }
		 >
		   <View style={styles.empty}>
		     <Text style={styles.emptyText}>Your drafts will be displayed here</Text>
		   </View>
		 </ScrollView>
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

export default DraftsScreen;
