import { FlatList } from "react-native"
import { Component } from "react";
import { FruitCard } from "../FruitCard";

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