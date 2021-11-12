import React, { useState, useEffect, useContext } from 'react';
import { Platform, Dimensions, ScrollView, StyleSheet, ActivityIndicator, TextInput, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import * as helpers from '../Helpers';

 import  UserContext from '../contexts/UserContext';
  
  

function InboxEditMessageScreen({route,navigation}){

   const [isLoading, setLoading] = useState(false);
   const [showMore, setShowMore] = useState(false);
   const [showMoreIcon, setShowMoreIcon] = useState("arrow-down-drop-circle");
   const [subject, setSubject] = useState("");
   const [oldMsg, setOldMsg] = useState("");
   const [msgg, setMsgg] = useState("");
   const uc = useContext(UserContext);
    const {op, l, msg } = route.params;
	let m = JSON.parse(msg), ic = helpers.wvParse(m.content);
	
  //let ic = helpers.wvParse(msg.content);
   console.log('[op,l,msg]: ',[op,l,m]);
   

const toggleShowMore = () => {
	let ss = !showMore;
	setShowMore(ss);
}
  
useEffect(() => {

	if(op == "reply"){
		setSubject(`Re: ${m.subject}`);
		setOldMsg(`On ${m.date}, ${m.sn} <${m.sa}> wrote: \n`);
	}
	else if(op == "forward"){
		setSubject(`Fwd: ${m.subject}`);
		setOldMsg(`
		   ----------Forwarded message----------\n
		   From: ${m.sn} <${m.sa}> \n
		   Date: ${m.date} \n
		   Subject: ${m.subject} \n
		   To: ${uc.u}@aceluxurystore.com \n
		   `);
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
		   <View style={{ marginBottom: 20}}>
		    <TextInput
              style={styles.ti}
			  multiline={true}
			  textAlignVertical="top"
              onChangeText={t => {setMsgg(t)}}
              placeholder="Compose message"
            />
			{
				showMore ? (
				<View style={[styles.empty]}>
				  <TextInput
                    style={[styles.ti,{marginTop: 20}]}
			        value={oldMsg}
			        multiline={true}
			        textAlignVertical="top"
                    onChangeText={t => {setOldMsg(t)}}
                  />
			      <View style={styles.webview}>
		            <WebView
		              originWhitelist={['*']}
		              source={{html: ic}}
			          textZoom={100}
		            />
                  </View>
               </View>
				) : (
				<Pressable
	              onPress={toggleShowMore}
	             >
                  <MaterialCommunityIcons name="dots-horizontal" color="#555" size={20} style={{padding: 2}}/>
				 </Pressable>
				)
			}
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
  },
    webview:{ 
  padding: 5,
  marginTop: 10,
  height: Dimensions.get('window').height
  }
  
});

export default InboxEditMessageScreen;