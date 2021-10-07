import React from 'react';
import {StatusBar, StyleSheet, View, Text, Image } from 'react-native';

const getLetter = (str) => {
	return str.substr(0,1);
}



const ItemAvatar = (props) => {
	return (
	  <View style={styles.avatar}>
	   <Text style={styles.letter}>{props.letter}</Text>
	    </View>
	);
}

const ItemCaption = (props) => {
	return (
	 <View style={styles.caption}>
	  <Text style={styles.from}>{props.from}</Text>
	  <Text style={styles.subject}>{props.subject}</Text>
	  <Text style={styles.extract}>{props.extract.substr(0,20)}</Text>
	  </View>
	);
}

const ListItem = (props) => {
	let i = props.item;
	console.log('i: ',i);
	return (
	 <View style={styles.item}>
	  <ItemAvatar letter={getLetter(i.from)}/>
	  <ItemCaption from={i.from} subject={i.subject} extract={i.msg}/>
     </View>	
	);
}

const styles = StyleSheet.create({

  item: {
	  flex: 1,
    padding: 5,
	flexDirection: 'row',
	
	backgroundColor: '#fff',
	borderBottomWidth: 1
  },
  caption: {
	  padding: 5,
	  width: 100,
  },
  avatar: {
	  padding: 15,
     width: 40,
    height: 40,
    borderRadius: 40/2,
	  overflow: 'hidden',
	  backgroundColor: '#34fa33',
	  alignItems: 'center',
	  justifyContent: 'center'
  },
  letter: {
	  color: '#fff',
	  fontWeight: 'bold'
  },
  from: {  
	  color: '#000',
	  fontWeight: 'bold'
  },
  subject: {
	  color: '#000',
	  fontWeight: 'bold'
  },
  extract: {
	  color: '#000'
  },
});

export default ListItem;
