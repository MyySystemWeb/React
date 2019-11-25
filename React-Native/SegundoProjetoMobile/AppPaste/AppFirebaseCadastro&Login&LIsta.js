import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView } from "react-native";
import firebaseConfig from '../src/config/firebaseConfig'
import firebase from "firebase";
import estilo from '../src/estilo/estilizar'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: '',
      uid: '',
      lista: [],
      onChangeText: ''
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
    this.add = this.add.bind(this);
    firebaseConfig.iniciarConfig();
  }

  cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((error) => {
        alert(error.code);
      });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //user.id
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: this.state.nome
        });
        alert("Usuário criado com sucesso!");
      }
    });
  }

  login() {
    //Logout
    firebase.auth().signOut();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).catch((error) => {
      alert(error.code);



    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let state = this.state;
        state.uid = user.uid;
        this.setState(state);

        alert("Usuário logado: " + user.uid);




        firebase.database().ref('todo').child(this.state.uid).on('value',
        (snapshot) => {
          let state = this.state;
    
          state.lista = [];
          snapshot.forEach((childItem) => {
            state.lista.push({
              titulo: childItem.val().titulo,
              key: childItem.key
            });
          });
          this.setState(state);
        });


      }
    });

  }
  add() {
    if (this.state.uid != '') {
      let todo = firebase.database().ref('todo').child(this.state.uid);
      let chave = todo.push().key;
      todo.child(chave).set({
        titulo: this.state.addItemTxt
      });

    }
  }

  render() {
    return (
      <View style={estilo.container} >
        <ScrollView>

          <View style={{ flex: 1 }}>
            <Text style={estilo.titulo}>Tela de Cadastro</Text>
            <Text>Nome</Text>
            <TextInput onChangeText={(nome) => this.setState({ nome })} style={estilo.input}></TextInput>

            <Text>E-Mail</Text>
            <TextInput onChangeText={(email) => this.setState({ email })} style={estilo.input}></TextInput>
            <Text>Senha</Text>
            <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={estilo.input}></TextInput>

            <View style={{ marginTop: 10 }}>
              <Button title="Cadastrar" onPress={this.cadastrar} />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={estilo.titulo}>Tela Login</Text>

            <Text>E-Mail</Text>
            <TextInput onChangeText={(email) => this.setState({ email })} style={estilo.input}></TextInput>
            <Text>Senha</Text>
            <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={estilo.input}></TextInput>

            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Button title="Login" onPress={this.login} />
            </View>

            <View style={estilo.addArea}>
              <Text>Adicionar</Text>
              <TextInput value={this.state.addItemTxt} onChangeText={(addItemTxt) => this.setState({ addItemTxt })} style={estilo.input} />
              <Button title="Adicionar" onPress={this.add}></Button>

            </View>

            <FlatList style={estilo.lista} 
              data={this.state.lista}
              renderItem={({item}) => {
                return (
                  <Text>
                    {item.titulo}
                  </Text>
                );
              }}
            >

            </FlatList>

          </View>


        </ScrollView>
      </View>
    );
  }
}

