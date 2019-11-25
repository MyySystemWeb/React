import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import firebase from "../config/firebaseConfig";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        }
    
        this.logar = this.logar.bind(this);
        this.cadastro = this.cadastro.bind(this);
        this.redefinirSenha = this.redefinirSenha.bind(this);
        //Deslogar usuário.
        firebase.sair();
    }


    cadastro() {
          this.props.navigation.navigate("Cadastro");

    }
    redefinirSenha() {
        this.props.navigation.navigate("Redefinir");
    }
    logar() {
       
        firebase.addAuthListener(
            (user)=>{
                if(user){
                    firebase.getUserInfo((info)=>{
                        this.props.navigation.navigate("Home", {
                            nome:info.val().nome
                        });
                    });

                }

            }
        );
firebase.login(this.state.email, this.state.senha).catch((error)=>{
    alert("Erro -"+error.code)
});


    }
    render() {
        return (
            <View style={styles.container}>
                <Text>E-Mail</Text>
                <TextInput onChangeText={(email) => this.setState({ email })} style={styles.input}></TextInput>
                <Text>Senha</Text>
                <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={styles.input}></TextInput>

                <View style={{ marginTop: 10 }}>
                    <Button title="Logar" onPress={this.logar} />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Button title="Cadastrar" onPress={this.cadastro} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button title="Redefinir Senha" onPress={this.redefinirSenha} />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Button title="teste" onPress={this.teste} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        margin: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',

    },
});