import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native-web';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

export default function App() {
	return (
		<View style={styles.container}>
			<Home></Home>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		paddingHorizontal: 16,
	},
})