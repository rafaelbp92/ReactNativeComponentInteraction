import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';


export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = { num1: '', num2: '' };
	}

	render() {
		return (
		<View>
			<Topo />
			<Resultado />
			<Painel 
				num1={this.state.num1}
				num2={this.state.num2}
			/>
		</View>
		);
	}
}
