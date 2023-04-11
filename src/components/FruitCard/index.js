import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";
import { style } from "./style";

export class FruitCard extends Component {
    
    render() {
        return (
            <View style={style.card}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }

}