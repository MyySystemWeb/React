import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.states = {
            nomes: [
                { nome: "Helio" },
                { nome: "Aline" },
                { nome: "Teté" },
            ]
        }

    }

    mostrarItem(item) {
        return (
            <Text>
                {item.nome}
            </Text>
        );
    }

    render() {
        return (
            <View>
                <FlatList data={this.states.nomes}
                    renderItem={({ item }) => this.mostrarItem(item)}
                ></FlatList>
            </View>

        );
    }

}