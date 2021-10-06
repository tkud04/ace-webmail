import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

function InboxScreen(){
	return (
	   <View style={styles.container}>
	     <Text>Messages in your inbox will be displayed here</Text>
	   </View>
	);
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InboxScreen;