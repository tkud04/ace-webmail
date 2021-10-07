import React from 'react';
import {StatusBar, StyleSheet, Pressable, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = (props) => {
	
	return (
	<Pressable
	   onPress={() =>{props.action}}
	   style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : '#adb'
          },
          styles.iconButton
        ]}
	 >
	 <View style={[styles.hc,props.style]}>
	   <MaterialCommunityIcons name={props.name} color={props.color} size={26} />
	 </View>
      </Pressable>
	);
};

const HeaderBar = () => {
	return (
	 <View style={styles.container}>
	  <IconButton name='plus' action={() => {newButtonClick()}} style={styles.newButton}/>
	  <IconButton name='account' action={() => {profileButtonClick()}} style={styles.profileButton}/>
     </View>	
	);
}

const styles = StyleSheet.create({

  container: {
	  flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	borderBottomWidth:1,
  },
  hc: {
	  width: 80,
	  height: 80,
	  borderRadius: 80/2,
	  overflow: 'hidden',
	  padding: 20
  },
  newButton: {
	  alignItems: 'flex-start',
  },
  profileButton: {
	  alignItems: 'flex-end',
  },
});

export default HeaderBar;
