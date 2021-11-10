import React, {useState} from 'react';
import {StatusBar, StyleSheet, Dimensions, Pressable, View, FlatList, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tooltip, Text } from 'react-native-elements';

const deleteMessage = () => {
	console.log('delete button clicked');
}

const markMessageUnread = () => {
	console.log('mark as unread button clicked');
}
const replyMessage = () => {
	console.log('reply button clicked');
}

const forwardMessage = () => {
	console.log('forward button clicked');
}

const IconButton = (props) => {
     const [showTitle, setShowTitle] = useState(false);
	return (
	<Pressable
	   onPress={props.action}
	   style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? props.bgcolor
              : '#fff'
          }
        ]}
	 >
	     <MaterialCommunityIcons name={props.name} color={props.color} size={26} style={[{padding: 5},props.style]}/>
      </Pressable>
	);
}


const MessageHeaderBar = (props) => {
	
	const menu = [
	{id: 3, name: 'reply', title: 'Reply', bgcolor: '#694fad', action: replyMessage, style: {marginRight:10}},
	{id: 4, name: 'forward', title: 'Forward', bgcolor: '#694fad', action: forwardMessage, style: {marginRight:10}},
	{id: 2, name: 'email', title: 'Mark unread', bgcolor: '#694fad', action: markMessageUnread, style: {marginRight:10}},
	{id: 1, name: 'trash-can', title: 'Trash', bgcolor: '#694fad', action: deleteMessage},
	
	];
	return (
	 <View style={styles.container}>
	 <FlatList
           data={menu}
		   horizontal={true}
           renderItem={({ item }) => <IconButton name={item.name} style={item.style} bgcolor={item.bgcolor} color={item.color} action={item.action}/>}
           keyExtractor={(item) => `menu-item-${item.id}`}
         />
     </View>
	);
}


const styles = StyleSheet.create({

  container: {
	  width: Dimensions.get('window').width - 500,
	flexDirection: 'row',
	justifyContent: 'flex-end',
	marginLeft: 40
  },
  ic: {
	  padding: 5
  },
  newButton: {
	
  },
  profileButton: {
	 
  }, 
  logoView: {
	 
  },
  logoText: {
	  alignItems: 'flex-end',
  },
});

export default MessageHeaderBar;
