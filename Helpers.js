import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text} from 'react-native';
import * as SecureStore from 'expo-secure-store';

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
    subject: 'First Item updated',
    msg: 'First Item updated',
  },
  {
    id: 'bd7asdfea-c1b6-46c2-aed5-3ad53abb28ba',
    from: 'Second Item',
    subject: 'Second Item updated',
    msg: 'Second Item updated',
  },{
    id: 'bd7acmkea-s2b1-46c2-aed5-3ad53abb28ba',
    from: 'Third Item',
    subject: 'Third Item updated',
    msg: 'Third Item updated',
  },{
    id: 'bdbzcbea-x36y-46c2-aed5-3ad53abb28ba',
    from: 'Fourth Item',
    subject: 'Fourth Item updated',
    msg: 'Fourth Item updated',
  },
];

return ret;
}

export function serializeJSON(data) {
  return Object.keys(data).map(function (keyName) {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
  }).join('&');
}