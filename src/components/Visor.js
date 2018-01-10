import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
	<View>
		<TextInput 
			placeholder='Resultado'
			editable={false}
			style={styles.txtInput}
		/>
	</View>		
);

const styles = StyleSheet.create({
	txtInput: { 
		fontSize: 50, 
		height: 80 
	}
});
