import React, {useState} from 'react';
import {StatusBar, StyleSheet, Dimensions, Pressable, View, FlatList, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tooltip, Text } from 'react-native-elements';
 import { useNavigation } from '@react-navigation/native';
import * as helpers from '../Helpers';

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
	const n = useNavigation();
	
	const menu = [
	{id: 3, name: 'reply', title: 'Reply', bgcolor: '#694fad', action: () => helpers.reply(n), style: {marginRight:10}},
	{id: 4, name: 'forward', title: 'Forward', bgcolor: '#694fad', action: () => helpers.forward(n), style: {marginRight:10}},
	{id: 2, name: 'email', title: 'Mark unread', bgcolor: '#694fad', action: helpers.markMessageUnread, style: {marginRight:10}},
	{id: 1, name: 'trash-can', title: 'Trash', bgcolor: '#694fad', action: helpers.deleteMessage},
	
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
