import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FruitList } from './src/components/FruitList';
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { FRUITS_FILTER_R, FRUITS_UPPER_CASE } from './src/constants';

export default function App() {
    const [data, setData] = useState(FRUITS_UPPER_CASE)
    const [filter, setFilter] = useState(false)

    function onPress() {
        setData(!filter ? FRUITS_FILTER_R : FRUITS_UPPER_CASE)
        setFilter(!filter)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="apple-alt" size={20} color='#ee793a'/>
                <Text style={styles.title}>Frutas</Text>
            </View>
            <View style={styles.menu}>
                <Text style={styles.name}>Nome</Text>
                <TouchableOpacity style={styles.touchable} activeOpacity={0.5} onPress={onPress}>
                    <Icon name="filter" size={15} color='#3d7ef6'/>
                    <Text style={styles.button}>Filtrar R</Text>
                </TouchableOpacity>
            </View>
            <FruitList data={data}/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '10%',
        marginBottom: '1%',
    },

    title: {
        fontSize: 20,
        marginLeft: 5
    },

    menu: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '1%',
    },

    touchable: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    name: {
        fontWeight: 'bold'
    },

    button: {
        fontSize: 15,
        color: '#3d7ef6',
    }

});