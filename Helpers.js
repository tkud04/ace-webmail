import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

//import RNPaystack from 'react-native-paystack';
//import {showMessage, hideMessage} from 'react-native-flash-message';
export const API = "https://mail.aceluxurystore.com/api";

export function tryParseJSON(jsonString){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
}

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key), ret = null;
  if (result) {
    ret = result;
  } else {
    //alert('No values stored under that key.');
  }
  return ret;
}

export async function remove(key) {
  await SecureStore.deleteItemAsync(key);
}


export function getInbox(){
	
let ret = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    from: 'First Item',
    subject: 'First Item',
    msg: 'First Item',
  },
  {
    id: 'bd7asdfea-c1b6-46c2-aed5-3ad53abb28ba',
    from: 'Second Item',
    subject: 'Second Item',
    msg: 'Second Item',
  },{
    id: 'bd7acmkea-s2b1-46c2-aed5-3ad53abb28ba',
    from: 'Third Item',
    subject: 'Third Item',
    msg: 'Third Item',
  },{
    id: 'bdbzcbea-x36y-46c2-aed5-3ad53abb28ba',
    from: 'Fourth Item',
    subject: 'Fourth Item',
    msg: 'Fourth Item',
  },
];

return ret;
}

export function fetchInbox(){
	
let ret = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    from: 'First Item',
    subject: 'First Item',
    msg: 'First Item',
  },
  {
    id: 'bd7asdfea-c1b6-46c2-aed5-3ad53abb28ba',
    from: 'Second Item',
    subject: 'Second Item',
    msg: 'Second Item',
  },{
    id: 'bd7acmkea-s2b1-46c2-aed5-3ad53abb28ba',
    from: 'Third Item',
    subject: 'Third Item',
    msg: 'Third Item',
  },{
    id: 'bdbzcbea-x36y-46c2-aed5-3ad53abb28ba',
    from: 'Fourth Item',
    subject: 'Fourth Item',
    msg: 'Fourth Item',
  },
];

return ret;
}

export async function fetchMessages(dt){
	
let ret = [], url = `${API}/messages?u=${dt.u}&tk=${dt.tk}&l=${dt.l}`;;
//console.log("url: ",url);
try {
		
	//create request
	const req = new Request(url);
      const response = await fetch(url);
      const dt = await response.json();
	  
	  if(dt.status == "ok"){
		let dtt = dt.data;
		for(let i = 0; i < dtt.length; i++){
			let ii = dtt[i];
			ret.push(ii);
		}
	  }
    } catch (error) {
      console.error(error);
    }
//console.log("ret: ",ret);
return ret;
}


export function serializeJSON(data) {
  return Object.keys(data).map(function (keyName) {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
  }).join('&');
}

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

export async function registerForPushNotificationsAsync() {
  let token = "", cid = Constants.isDevice;

  if (cid) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
		  // alert(`In registerForPushNotificationsAsync(), finalStatus = ${finalStatus}`);
    if (finalStatus == 'granted') {
      Notifications.getExpoPushTokenAsync()
	  .then(data => {
		  //alert(`In getExpoPushTokenAsync(), data = ${data}`);
		  console.log(` data: `,data);
		  token = data.data;
		  	save('ace_etk',token); 
	  })
	  .catch(err => {
		  alert(`In getExpoPushTokenAsync(), err = ${err}`);
	  });
    }
	else {
		alert('Failed to get push token for push notification!');
	}
    
    //console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  
  //alert(`In registerForPushNotificationsAsync(), token: ${token}`);
  return token;
}

export function findItem(l,x){
	console.log("[l,x]: ",[l,x]);
	return l.find(i => i.id == x);
}