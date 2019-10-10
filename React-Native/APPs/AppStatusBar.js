import React, { Component } from "react";
import { View, StatusBar, Text, Button } from "react-native";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { estiloBar: "default", corFundo:'blue' }
        this.mudarParaDark = this.mudarParaDark.bind(this);
        this.mudarParaLight = this.mudarParaLight.bind(this);
        this.mudarParaDefault = this.mudarParaDefault.bind(this);
        this.fundoEscuro = this.fundoEscuro.bind(this);
        this.fundoClaro = this.fundoClaro.bind(this);
    }

    fundoEscuro() {
        let aux = this.state;
        aux.corFundo='black'
        this.setState(aux);
    }

    fundoClaro() {
        let aux = this.state;
        aux.corFundo='white'
        this.setState(aux);
    }

    mudarParaDark() {
        let aux = this.state;
        aux.estiloBar = 'dark-content';
        this.setState(aux);
    }

    mudarParaLight() {
        let aux = this.state;
        aux.estiloBar = 'light-content';
        this.setState(aux);
    }

    mudarParaDefault() {
        let aux = this.state;
        aux.estiloBar = 'default';
        this.setState(aux);
    }

    
    render() {
        return (
            <View style={{backgroundColor:this.state.corFundo,flex:1}}>
                <StatusBar barStyle={this.state.estiloBar}  ></StatusBar>
                <Text>Status Bar</Text>
                <Button title='Dark' onPress={this.mudarParaDark} />
                <Button title='Light' onPress={this.mudarParaLight} />
                <Button title='Default' onPress={this.mudarParaDefault} />
                <Button title='Fundo Ecuro' onPress={this.fundoEscuro} />
                <Button title='Fundo Claro' onPress={this.fundoClaro} />
            </View>
        );
    }
}