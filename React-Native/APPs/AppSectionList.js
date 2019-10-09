import React, { Component } from "react";
import { View, Text, SectionList } from "react-native"
import estilo from "./MeuStyleSheet/CSS.js"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaData: [
                {
                    titulo: "Letra A", data: [
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                        { nome: "Aline", idade: 27 },
                    ]
                },
                {
                    titulo: "Letra H", data: [
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                        { nome: "Helio", idade: 30 },
                    ]
                },
            ]
        };
    }
    meuItem(item) {
        return (
            <Text>{item.nome}</Text>
        );
    }
    meuSection(section) {
        return (
            <Text style={estilo.letra}>{section.titulo}</Text>
        );
    }
    render() {
        return (
            <View style={estilo.body}>
                <SectionList sections={this.state.listaData}
                    renderItem={({ item }) => this.meuItem(item)}
                    renderSectionHeader={({ section }) => this.meuSection(section)} />
            </View>
        );
    }
}