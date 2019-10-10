import React, { Component } from "react";
import { View, Text, Button } from "react-native"

export default class tela2 extends Component {

    static navigationOptions = {
        title: 'Tela 2'
    }

    render() {
        return (
            <View>
                <Text>Tela 02</Text>
                <Button title='Tela 02' onPress={() => this.props.navigation.goBack()}></Button>
                <Text>Nome > {this.props.navigation.getParam('nome','n/a')}</Text>
                <Text>Idade > {this.props.navigation.getParam('idade','0')}</Text>
            </View>

        );
    }
}