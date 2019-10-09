import React, { Component } from "react";
import { View, Picker, Text } from "react-native";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servico: 0, servicos: [
                { nome: 'Alinhamento', valor: 30 },
                { nome: 'Balanceamento', valor: 50 },
                { nome: 'Revisão', valor: 70 },
            ]
        }

    }
    render() {
        let servicosItems = this.state.servicos.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />

        });
        return (
            <View>
                {/* <Picker selectedValue={0} onValueChange={(itemValue, itemIndex)=> this.setState({servico:itemValue})}>
                    <Picker.Item key={0} value="10" label="Alinhamento"/>
                    <Picker.Item key={0} value="20" label="Balanceamento"/>
                    <Picker.Item key={0} value="30" label="Revisão"/>
                </Picker> */}
                <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({ servico: itemValue })}>
                    {servicosItems}
                </Picker>

                <Text>R${this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
            </View>
        );
    }
}