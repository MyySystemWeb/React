import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      nomeDinamico: "Dinamico",
      nomeFixo: "Fixo",
      idade: "",
      id: 1,
    }

    this.inserirUsuario = this.inserirUsuario.bind(this);
    this.deletarUsuario = this.deletarUsuario.bind(this);
    this.criarLista = this.criarLista.bind(this);

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

    //Real Time
    firebase.database().ref("nome").on('value', (snapshot) => {
      let state = this.state;
      state.nomeDinamico = snapshot.val();
      this.setState(state);
    },

      //Pega uma unica vez
      firebase.database().ref("nome").once('value').then((snapshot) => {
        let state = this.state;
        state.nomeFixo = snapshot.val();
        this.setState(state);
      })
    );
    this.criarLista();
  }

  criarLista() {    
    firebase.database().ref('usuarios').on('value', (snapshot) => {
      let state = this.state;
      state.lista = [];
      snapshot.forEach((childItem) => {
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          idade: childItem.val().idade,
        });
        this.setState(state);
      });
    });

    if(this.state.lista.length<1){
      let state = this.state;
      state.lista = [{nome:"Lista Vazia"}];
      this.setState(state);
    }
  }

  deletarUsuario() {
    firebase.database().ref('usuarios').child(this.state.id).remove()
  }
  inserirUsuario() {
    if (this.state.nomeDinamico.length > 0) {
      let usuarios = firebase.database().ref('usuarios');
      let chave = usuarios.push().key;
      usuarios.child(chave).set({
        nome: this.state.nomeDinamico,
        idade: this.state.idade
      });
    }
  }

  render() {
    return (
      <View>
        <View >
          <Text>FireBase Real Time:</Text>
          <Text>Nome</Text>
          <TextInput style={styles.input} onChangeText={(nomeDinamico) => this.setState({ nomeDinamico })} />
          <Text>Idade</Text>
          <TextInput style={styles.input} onChangeText={(idade) => this.setState({ idade })} />
          <Button style={styles.bt} title="Inserir Usuário" onPress={this.inserirUsuario} />
          <Text>Deletar</Text>
          <TextInput style={styles.input} onChangeText={(id) => this.setState({ id })} />
          <Button style={styles.bt} title="Deletar" onPress={this.deletarUsuario} />
          <Text>{this.state.nomeDinamico}</Text>
          <Text> --- {this.state.nomeFixo}</Text>
        </View>
        <View >
          <Text style={{ marginTop: 15, fontSize: 16 }}> Lista</Text>
          <FlatList
            data={this.state.lista}
            renderItem={({ item }) =>
              <ItemList data={item}  nome={item.nome} chave={item.key}  atualizarLista={this.criarLista}
              keyExtractor={(item, index) => item.key}  />
            }
          />
        </View>
      </View>
    );
  }
}

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.alterarValor=this.alterarValor.bind(this);
  }
  render() {
    return (
      <View style={styles.list}>
        <Text>{this.props.nome} / </Text>
        <Text>{this.props.chave}</Text>
        <View style={styles.bt}>
          <Button title="X" onPress={this.alterarValor} />
        </View>
      </View>
    );
  }

  alterarValor() {
    alert("Usuário Deletado: "+this.props.nome);
     firebase.database().ref('usuarios').child(this.props.chave).remove();
     this.props.atualizarLista();
  }
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#0000FF',
    margin: 5,
  },
  bt: {
    alignItems: 'center',
    width: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    margin: 5,
    marginRight: 15,

  },
  list: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: '#f3f2ecf5'
  }
});