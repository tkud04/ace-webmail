import React,  { useState,  useContext, useEffect } from 'react';
import {StatusBar, StyleSheet, View, Pressable, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SelectedInboxContext from '../contexts/SelectedInboxContext';
import * as helpers from '../Helpers';

const Checkbox = (props) => {
	
	 let sic = useContext(SelectedInboxContext);
	 let color = "#000";
	    const [checked, setChecked] = useState(false);

	  const toggleCheckbox = dt => {
	    /**
		let i = {id:dt,selected: false};
         let l = sic.list, ii = helpers.findItem(l,dt.id);
	
         if(ii){
		  ii.selected = !ii.selected;
		  i = ii;
	     }
	     else{
          l.push(i);
	     }
	     sic.setList(l);
		 **/
		 setChecked(!checked);
     }

	  
	 return (
	   <Pressable
	   onPress={() =>{toggleCheckbox(props.id)}}
	   style={[styles.box,checked && styles.checkedBox]}
	 >
	 {checked &&  <MaterialCommunityIcons name="check" color={color} size={26} />}
	 </Pressable>
	 );
}

const styles = StyleSheet.create({
	box: {
	  width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkedBox: {
	   backgroundColor: 'coral',
  },
});

export default Checkbox;