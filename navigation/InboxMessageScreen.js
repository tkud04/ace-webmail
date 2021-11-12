import React, { useState, useEffect, useContext } from 'react';
import { Platform, Dimensions, ScrollView, StyleSheet, ActivityIndicator, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import * as helpers from '../Helpers';

 import ListItem from '../components/ListItem.js';
 import Checkbox from '../components/Checkbox.js';

 import  UserContext from '../contexts/UserContext';

function InboxMessageScreen({route,navigation}){

   const [isLoading, setLoading] = useState(false);
   const [showMore, setShowMore] = useState(false);
   const [showMoreIcon, setShowMoreIcon] = useState("arrow-down-drop-circle");
   const uc = useContext(UserContext);
  const { item } = route.params;
  let ic = helpers.wvParse(item.content);
   helpers.save('ace_current_xf',`${item.id}`); 
   helpers.save('ace_current_msg',JSON.stringify(item)); 
  // console.log('ic: ',ic);
   
   const ItemAvatar = (props) => {
	return (
	  <View style={styles.avatar}>
	    <Text style={styles.letter}>{props.letter}</Text>
	    </View>
	);
}

const toggleShowMore = () => {
	let ss = !showMore, ssi = ss ? "arrow-up-bold-circle" : "arrow-down-drop-circle" ;
	setShowMore(ss);
	setShowMoreIcon(ssi);
}
   
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
	  console.log('item: ',item);
    // Fetch message if possible
	//console.log(`fetching new mail..`);
	if(isLoading){
    
	}
  });
  

  
	return (
	   <ScrollView style={styles.container}> 
		   {
			   isLoading ? (
		 <View style={[styles.empty,{alignItems: 'center'}]}>
		   <Text style={styles.emptyText}>Your message will be displayed here</Text>
		 </View>
		 ) : (
		 <View style={styles.empty}>
		   <View style={{flexDirection: 'row',marginBottom: 10}}>
		     <Text style={styles.subject}>{item.subject}</Text>
		   </View>
		   <View style={{flexDirection: 'row',marginBottom: 5}}>
		     <ItemAvatar letter={item.sn.substr(0,1)}/>
		     <View>
		       <Text style={styles.sn}>{item.sn}</Text>
		       <Text style={styles.sd}>{item.date}</Text>
			   <View style={{flexDirection: 'row',marginBottom: 5}}>
		         <Text style={styles.sd}>to me </Text>
				 <Pressable
	              onPress={toggleShowMore}
	             >
			       <MaterialCommunityIcons name={showMoreIcon} color="#555" size={20} style={{padding: 2}}/>
				 </Pressable>
		        </View>
		     </View>
		   </View>
		   {
			 showMore && (
		   <View style={styles.showMore}>
			    <Text style={[styles.sd,{marginBottom: 5}]}>From: {item.sn} | {item.sa}</Text>
			    <Text style={[styles.sd,{marginBottom: 5}]}>To: {uc.u}@aceluxurystore.com</Text>
			    <Text style={styles.sd}>Date: {item.date}</Text>
		   </View>
		   )		   
		   }
		   <View style={styles.webview}>
		   <WebView
		    originWhitelist={['*']}
		    source={{html: ic}}
			textZoom={100}
		   />
		   </View>
		 </View>
		   )
		   }
	   </ScrollView>
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
	  padding: 5 
  },
  emptyText: {
	  color: '#f00',
      fontSize: 15
  },
  subject: {
      fontSize: 20
  },
    avatar: {
	//  padding: 7,
	marginRight: 5,
     width: 50,
    height: 50,
    borderRadius: 50/2,
	  overflow: 'hidden',
	  //backgroundColor: '#34fa33',
	  backgroundColor: '#694fad',
	  alignItems: 'center',
	  justifyContent: 'center'
  },
  letter: {
	  color: '#fff',
	  fontWeight: 'bold',
	   fontSize: 20
  },
  sn: {
  },
  sd: {
	  color: '#555',
	  fontSize: 13
  },
  showMore: {
	  borderWidth: 0.8,
	  borderColor: '#777',
	  padding: 5
  },
  webview:{ 
  padding: 5,
  marginTop: 10,
  height: Dimensions.get('window').height
  }
});

export default InboxMessageScreen;