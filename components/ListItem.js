import React from 'react';
import {StatusBar, StyleSheet, View, Pressable, Text, Image } from 'react-native';

const getLetter = (str) => {
	return str.substr(0,1);
}

 const showMessage = (id) => {
	 console.log(`Showing email with id ${id}`);
  };

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
	  <Text style={[styles.from,props.status == "unread" ? styles.unread : null]}>{props.from}</Text>
	  <Text style={styles.subject}>{props.subject}</Text>
	  <Text style={styles.extract}>{props.extract.substr(0,20)}</Text>
	  </View>
	);
}

const ListItem = (props) => {
	let i = props.item;
	console.log('i: ',i);
	return (
	<Pressable
	   onPress={() =>{showMessage(i.id)}}
	   style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(0, 0, 0)'
              : 'white'
          },
          styles.listButton
        ]}
	 >
	 <View style={styles.item}>
	  <ItemAvatar letter={getLetter(i.sn)}/>
	  <ItemCaption from={i.sn} subject={i.subject} extract={i.excerpt} status={i.status}/>
     </View>	
	 </Pressable>
	);
}

const styles = StyleSheet.create({

  item: {
	  flex: 1,
    padding: 5,
	flexDirection: 'row',
	
	backgroundColor: '#fff',
	borderBottomWidth: 0.8
  },
  caption: {
	  padding: 5,
	   flex: 5,
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
	  fontWeight: 'bold',
	  width: 150,
	  marginBottom: 5
  },
  subject: {
	  color: '#000',
	  fontWeight: 'bold'
  },
  extract: {
	  color: '#000'
  },
  unread: {
	  padding: 5,
	  color: '#fff',
	  overflow: 'hidden',
	  backgroundColor: '#34fa33'
  },
});

export default ListItem;
