import React, { Component } from "react";
import { View, Text, Button, TextInput,Image } from "react-native"

export default class tela1 extends Component {

    constructor(props) {
        super(props);
        this.state = { nome: '', idade: 0 }
        this.setNome = this.setNome.bind(this);
        this.setIdade = this.setIdade.bind(this);
    }

    static navigationOptions = {
        drawerIcon:()=>(
            <Image source={require('./images/menu.png')} />
        ),
  
        title: 'Tela 1',
        /** Configuração por tela */
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        }
    }

    setNome(valor) {
        let aux = this.state;
        aux.nome = valor;
        this.setState(aux);

    }
    setIdade(valor) {
        let aux = this.state;
        aux.idade = valor;
        this.setState(aux);
    }

    render() {
        return (
            <View>
                <Button title='Ir para Tela 02' onPress={() => this.props.navigation.navigate('Tela2', { nome: this.state.nome, idade: this.state.idade })}></Button>
                <Button title='Ir para Tela 03' onPress={() => this.props.navigation.navigate('Tela3', { nome: this.state.nome, idade: this.state.idade })}></Button>
                <Button title='Ir para Tela 04' onPress={() => this.props.navigation.navigate('Tela4', { nome: this.state.nome, idade: this.state.idade })}></Button>
             
                <TextInput placeholder='Nome' onChangeText={(valor => this.setNome(valor))}
                    value={this.state.nome} ></TextInput>
                <TextInput placeholder='Idade' onChangeText={(valor => this.setIdade(valor))}
                    value={this.state.idade} ></TextInput>
            </View>

        );
    }
}

