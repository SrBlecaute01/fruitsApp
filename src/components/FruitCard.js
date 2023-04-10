import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";

export class FruitCard extends Component {

	render() {
		return (
			<View style={style.card}>
				<Text>{this.props.text}</Text>
			</View>
		)
	}

}

const style = StyleSheet.create({

	card: {
		margin: 2,
		padding: 8,
		marginLeft: 20,
		marginRight: 20,
		elevation: 2,
		shadowColor: '#424242',
		shadowOffset: {width: -2, height: 5},
		shadowRadius: 3,
		backgroundColor: 'rgba(241,241,241,0.93)',
	},

});