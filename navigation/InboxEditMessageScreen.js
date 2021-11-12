import React, { useState, useEffect, useContext } from 'react';
import { Platform, Dimensions, ScrollView, StyleSheet, ActivityIndicator, TextInput, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as helpers from '../Helpers';

 import  UserContext from '../contexts/UserContext';
  
  

function InboxEditMessageScreen({route,navigation}){

   const [isLoading, setLoading] = useState(false);
   const [showMore, setShowMore] = useState(false);
   const [showMoreIcon, setShowMoreIcon] = useState("arrow-down-drop-circle");
   const [subject, setSubject] = useState("");
   const [msgg, setMsgg] = useState("");
   const uc = useContext(UserContext);
    const {op, l, msg } = route.params;
	let m = JSON.parse(msg);
	
  //let ic = helpers.wvParse(msg.content);
   console.log('[op,l,msg]: ',[op,l,m]);
   

const toggleShowMore = () => {
	let ss = !showMore, ssi = ss ? "arrow-up-bold-circle" : "arrow-down-drop-circle" ;
	setShowMore(ss);
	setShowMoreIcon(ssi);
}
  
useEffect(() => {
	if(op == "reply"){
		setSubject(`Re: ${m.subject}`);
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
		 <View style={[styles.empty,{marginTop: 5}]}>
		   <View style={[styles.formView,{flexDirection: 'row'}]}>
		     <Text style={[styles.label,styles.std]}>From</Text>
		     <Text style={styles.std}>{`${uc.u}@aceluxurystore.com`}</Text>
		   </View>
		   <View style={[styles.formView,{flexDirection: 'row'}]}>
		     <Text style={[styles.label,styles.std]}>To</Text>
			 <View style={styles.to}>
		       <Text style={[styles.std]}>{m.sn}</Text>
		     </View>
		   </View>
		   <View style={[styles.formView,{flexDirection: 'row'}]}>
		     <Text style={[styles.label,styles.std]}>Subject</Text>
			 <TextInput
              style={styles.ti}
              value={subject}
              onChangeText={t => {setSubject(t)}}
              placeholder="Subject"
            />
		   </View>
		   <View style={[styles.formView]}>
		    <TextInput
              style={styles.ti}
              onChangeText={t => {setMsgg(t)}}
              placeholder="Compose message"
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
  std: {
      fontSize: 15
  },
  to: {
      borderWidth: 0.8,
	  paddingLeft: 8,
	  paddingRight: 8,
	  paddingTop: 1,
	  paddingBottom: 1,
	  borderRadius: 20,
	   borderColor: "#999",
  },
  label: {
      color: '#888',
	  marginRight: 15,
	  fontSize: 15
  },
  formView: {
	  marginBottom: 20, 
	  borderBottomWidth: 0.8, 
	  borderColor: "#ccc",
	  paddingBottom: 15
  }
  
});

export default InboxEditMessageScreen;