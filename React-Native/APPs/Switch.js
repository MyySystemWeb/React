import React, { Component } from "react";
import { View, Text, Switch } from "react-native";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { valor: true }
    }
    render() {
        return (
            <View>
                <Switch trackColor={"red"} thumbColor={"blue"}
                    value={this.state.valor}
                    onValueChange={(v) => this.setState({ valor: v })} >
                </Switch>
                <Text>{this.state.valor.toString()} </Text>
            </View>
        );
    }
}