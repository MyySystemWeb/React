import React, { Component } from "react"
import { View, Text, TextInput, AsyncStorage } from "react-native";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { texto: '', infoDb: '' }
        AsyncStorage.getItem("texto").then((value) => {
            this.setState({ infoDb: value });
        });
        this.salvarTexto = this.salvarTexto.bind(this);
    }
    salvarTexto(texto) {
        let aux = this.state;
        aux.texto = texto;
        this.setState(aux);
        AsyncStorage.setItem("texto", texto);
    }
    render() {
        return (
            <View>
                <Text>Texto</Text>
                <TextInput onChangeText={(texto) => this.salvarTexto(texto)} value={this.state.texto} />
                <Text>InfoDB é: {this.state.infoDb}</Text>
            </View>
        );
    }
}