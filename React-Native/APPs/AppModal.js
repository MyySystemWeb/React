import React, { Component } from "react";
import { View, Modal, Text, Button } from "react-native";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { visivel: false }
        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
    }
    abrirModal() {
        let novoState = this.state;
        novoState.visivel = true;
        this.setState(novoState);
    }
    fecharModal() {
        let novoState = this.state;
        novoState.visivel = false;
        this.setState(novoState);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Modal animationType="slide" visible={this.state.visivel}  >
                    <View style={{ flex: 1, backgroundColor: 'blue' }} >
                        <Text>Modal aberto</Text>
                        <Button onPress={this.fecharModal} title="Fechar" />
                    </View>
                </Modal>
                <Text>Modal Fechado</Text>
                <Button onPress={this.abrirModal} title="Abrir" />
            </View>
        );
    }
}