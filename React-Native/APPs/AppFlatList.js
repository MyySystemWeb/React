import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.states = {
            nomes: [
                { key: 1, nome: "Helio" },
                { key: 2, nome: "Aline" },
            ]
        };
    }

    meuItem(item) {
        return (
            <Text>{item.nome}</Text>

        );
    }


    render() {
        return (
            <View>
                <Text>Oi</Text>
                <FlatList data={this.states.nomes} renderItem={({ item }) => (
                    <Text>
                        {item.nome}
                    </Text>

                )} ></FlatList>

                <FlatList data={this.states.nomes} renderItem={({ item }) => this.meuItem(item)  } ></FlatList>



            </View>
        );
    }

}