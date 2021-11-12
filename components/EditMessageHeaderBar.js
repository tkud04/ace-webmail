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


const EditMessageHeaderBar = (props) => {
	const n = useNavigation();
	//let xf = await getValueFor("ace_current_xf");
	const menu = [
	{id: 3, name: 'attachment', title: 'Attach file', bgcolor: '#694fad', action: helpers.attachMessage, style: {marginRight:10}},
	{id: 4, name: 'send', title: 'Send', bgcolor: '#694fad', action: helpers.sendMessage, style: {marginRight:10}},
	{id: 2, name: 'text-box-remove', title: 'Discard', bgcolor: '#694fad', action: helpers.markMessageUnread}
	
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

export default EditMessageHeaderBar;
