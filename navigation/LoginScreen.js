import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text, FlatList, SafeAreaView, StatusBar } from 'react-native';

function LoginScreen(){
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

export default LoginScreen;
