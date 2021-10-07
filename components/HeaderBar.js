import React from 'react';
import {StatusBar, StyleSheet, Pressable, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const newButtonClick = () => {
	console.log('new button clicked');
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
              ? 'rgb(210, 230, 255)'
              : props.bgcolor,
			  color: pressed
              ? '#000'
              : '#fff'
          },
          styles.iconButton
        ]}
	 >
	 <View style={[styles.hc,props.style]}>
	   <MaterialCommunityIcons name={props.name}  size={26} />
	 </View>
      </Pressable>
	);
};

const HeaderBar = () => {
	return (
	 <View style={styles.container}>
	  <IconButton name='plus' bgcolor='#694fad' action={newButtonClick} style={styles.newButton}/>
	  <View style={styles.logoView}>
	  <Image source={require('../assets/logo.png')}  style={{ width: 60, height: 60 }}/>
	  <Text style={styles.logoText}>Webmail</Text>
	  </View>
	  <IconButton name='account'  bgcolor='#694fad' action={profileButtonClick} style={styles.profileButton}/>
     </View>	
	);
}

const styles = StyleSheet.create({

  container: {
	  flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	borderBottomWidth:0.8,
  },
  hc: {
	  width: 80,
	  height: 20,
	  overflow: 'hidden',
	  padding: 20
  },
  newButton: {
	  alignItems: 'flex-start',
  },
  profileButton: {
	  alignItems: 'flex-end',
  }, 
  logoView: {
	 
  },
  logoText: {
	  alignItems: 'flex-end',
  },
});

export default HeaderBar;
