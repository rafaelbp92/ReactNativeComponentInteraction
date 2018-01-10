import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {
	constructor(props) {
		super(props);
	
		this.state = { operacao: 'subtracao' };
	}

	render() {
		return (
			<Picker 
				style={styles.pickerStyle}
				selectedValue={this.state.operacao}
				onValueChange={op => { this.setState({ operacao: op }) }}
			>
				<Picker.Item label='Soma' value='soma' />
				<Picker.Item label='Subtração' value='subtracao' />
			</Picker>
		);
	}
}

const styles = StyleSheet.create({
	pickerStyle: {
		marginTop: 15,
		marginBottom: 15
	}
});
