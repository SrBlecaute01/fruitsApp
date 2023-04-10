import { FlatList } from "react-native"
import { FruitCard } from "./FruitCard"
import { Component } from "react";

export class FruitList extends Component {

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({item}) => <FruitCard text={item}/>}
            />
        )
    }

}