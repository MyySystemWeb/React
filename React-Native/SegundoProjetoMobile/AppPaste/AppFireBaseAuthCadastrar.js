import React, { Component } from "./node_modules/react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import firebase from "./node_modules/firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDLOsoHg4AZGzBlsvyHrU0P-OmVPUQq8gY",
      authDomain: "projeto-reactnative-c48ec.firebaseapp.com",
      databaseURL: "https://projeto-reactnative-c48ec.firebaseio.com",
      projectId: "projeto-reactnative-c48ec",
      storageBucket: "projeto-reactnative-c48ec.appspot.com",
      messagingSenderId: "289854187870",
      appId: "1:289854187870:web:547d91c6f9ff55d8dd47cf",
      measurementId: "G-PB588RCF13"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
          <Button title="Cadastrar" onPress={this.cadastrar} />
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