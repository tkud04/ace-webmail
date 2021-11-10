import React from 'react';
import {StatusBar, StyleSheet, Dimensions, Pressable, View, FlatList, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tooltip, Text } from 'react-native-elements';

const deleteMessage = () => {
	console.log('delete button clicked');
}
const markMessageUnread = () => {
	console.log('mark as unread button clicked');
}

const profileButtonClick = () => {
	console.log('profile button clicked');
}

const IconButton = (props) => {
	
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
	   <Tooltip popover={<Text>{props.title}</Text>}>
	     <MaterialCommunityIcons name={props.name} color={props.color} size={26} style={[{padding: 5},props.style]}/>
	  </Tooltip>
      </Pressable>
	);
};


const MessageHeaderBar = (props) => {
	const menu = [
	{id: 3, name: 'reply', title: 'Reply', bgcolor: '#694fad', action: replyMessage,style: {marginRight:10}},
	{id: 4, name: 'trash-can', title: 'reply', bgcolor: '#694fad', action: deleteMessage,style: {marginRight:10}},
	{id: 1, name: 'trash-can', title: 'reply', bgcolor: '#694fad', action: deleteMessage,style: {marginRight:10}},
	{id: 2, name: 'email', title: 'reply', bgcolor: '#694fad', action: markMessageUnread},
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
