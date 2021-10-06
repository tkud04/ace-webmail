import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

function DraftsScreen(){
	return (
	   <View style={styles.container}>
	     <Text>Your drafts will be displayed here</Text>
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

export default DraftsScreen;
