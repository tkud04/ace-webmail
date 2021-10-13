import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, View, Modal, Text, Pressable, Dimensions,StatusBar } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import * as helpers from '../Helpers';
import UserContext from '../UserContext';


function MoreScreen(){
	
	const ctx = useContext(UserContext);
	const pp = () => {
		console.log("moving..");
	}
	const [isSMVisible, setIsSMVisible] = useState(false);
	
	const confirmSignout = () => {
		setIsSMVisible(true);
	}
	
	const test = async () => {
          await helpers.schedulePushNotification();
        }
		
		const signout = async () => {
	
	try {
	//create request
	let url = `${helpers.API}/bye?u=${ctx.u}&tk=${ctx.tk}`;
	   const response = await fetch(url);
      const dt = await response.json();
      console.log("dt: ",dt);
	  
	  if(dt.status == "error"){
		  helpers.remove('ace_tk');
		  helpers.remove('ace_u');
		  ctx.setTk(null);
		  ctx.setU(null);
		  ctx.setLoggedIn(false);
	  }
    } catch (error) {
      console.error(error);
    }
}
	
	const items = [
	 {key: 1, caption: "View messages in the Spam folder.", btn: "Spam", play: test},
	 {key: 2, caption: "View messages in the Trash folder.", btn: "Trash", play: pp},
	 {key: 3, caption: "View information about the app.", btn: "About", play: pp},
	 {key: 4, caption: "Sign out of your account", btn: "Sign out", play: confirmSignout},
	];
    
	return (
	   <View style={styles.container}>
	    <Text style={styles.caption}>More options</Text>
		  {
			items.map(i => ( 
	        <View style={styles.item}>
			   <Text style={{marginRight: 1}}>{i.caption}</Text>
			    <AwesomeButton
		      type="round"
			  activeOpacity={0.5}
			  width={80}
			  height={40}
        textColor="#fff"
		backgroundColor="#694fad"
		progress
             onPress={(next) => {
			  i.play();
			  next();
             }}
    >
	{i.btn}
    </AwesomeButton>
			</View>
			))
		  }
		  
		   <Modal
        animationType="slide"
        transparent={true}
        visible={isSMVisible}
        onRequestClose={() => {
          //Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure?</Text>
             <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
              <AwesomeButton
		       type="round"
			   activeOpacity={0.5}
			   width={80}
			   height={40}
               textColor="#fff"
		       backgroundColor="orange"
		       progress
              onPress={(next) => {
			   signout();
			   next();
              }}
             >
	         Yes
            </AwesomeButton>
			<AwesomeButton
		       type="round"
			   activeOpacity={0.5}
			   marginLeft={5}
			   width={80}
			   height={40}
               textColor="#fff"
		       backgroundColor="green"
		       progress
              onPress={(next) => {
			   setIsSMVisible(false);
			   next();
              }}
             >
	         No
            </AwesomeButton>
		   </View>
          </View>
        </View>
      </Modal>
	   </View>
	);
}

const styles = StyleSheet.create({
  container: {
	backgroundColor: '#fff',
	//marginTop: StatusBar.currentHeight || 0,
	width: '100%',
	height: '100%',
	flex: 1
  },
  item: {
	  flex: 1,
    padding: 3,
	flexDirection: 'row',
	backgroundColor: '#fff',
	justifyContent: 'space-between',
  },
    caption: {
    fontSize: 18,
	fontWeight: "bold",
	marginTop: StatusBar.currentHeight || 0,
	marginBottom: StatusBar.currentHeight || 0,
  },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
    modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MoreScreen;