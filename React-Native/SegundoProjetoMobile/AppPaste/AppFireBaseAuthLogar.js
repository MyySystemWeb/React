import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    }

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert("Fez login: ")
      }
    });
    //Deslogar usuário.
    // firebase.auth().signOut();
  }


  sair() {
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      alert("Ainda está logado: ");
    }else{
      alert("Deslogou! ")
    }});
  }

  logar() {
    firebase.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.senha.trim())
      .catch((error) => {
        if (error.code == "auth/wrong-password") {
          alert("Usuáriou ou senha inválido")
        } else {
          alert("Deu ruim em Logar()-"+error.code);
        }
      });;

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          alert("usuário Logado");
        }else{
          alert("Deslogado ")
        }});


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
          <Button title="Sair" onPress={this.sair} />
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