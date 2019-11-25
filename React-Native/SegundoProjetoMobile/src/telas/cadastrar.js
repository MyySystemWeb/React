import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import firebase from "../config/firebaseConfig";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    }
    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
  }

  cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      //error.code
      //erro.message
      alert(error.code+" - "+error.message);

      if(error.code=='auth/weak-password'){
        alert("Senha deve ter no minimo 6 digitos");
     }else if(error.code=='auth/invalid-email'){
        alert("E-mail inválido");
 
      }else if(error.code=='auth/email-already-in-use'){
        alert("E-mail já existe");        
      }
    });
    alert("Usuário Cadastrado com sucesso!");

  }

  logar(){

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>E-Mail</Text>
        <TextInput onChangeText={(email) => this.setState({ email })} style={styles.input}></TextInput>
        <Text>Senha</Text>
        <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={styles.input}></TextInput>

        <View style={{ marginTop: 10 }}>
          <Button title="Salvar Cadastro" onPress={this.cadastrar} />
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