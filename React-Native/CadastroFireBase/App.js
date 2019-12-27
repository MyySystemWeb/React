import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TextInput, Button, FlatList, ScrollView } from 'react-native';
import css from './src/Estilo/estiloCss';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from "./src/firebase/firebaseConfig";
import Usuario from './src/Usuario';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formAvatar: null,
      formNome: '',
      formEmail: '',
      formSenha: '',
      userUid: 0,
      lista: []
    };
    this.cadastrar = this.cadastrar.bind(this);
    this.carregar = this.carregar.bind(this);
    this.saveAvatar = this.saveAvatar.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.limpar = this.limpar.bind(this);



    firebase.auth().signOut();
    firebase.database().ref('users').on('value', (snapshot) => {
      let state = this.state;
      state.lista = [];
      snapshot.forEach((child) => {
        state.lista.push({
          key: child.key,
          name: child.val().name,
          email: child.val().email,
        })
      });
      this.setState(state);
    });

  }

  limpar() {
    this.state.userUid = '';
  }

  carregar() {
    ImagePicker.showImagePicker({}, (r) => {
      if (r.uri) {
        let state = this.state;
        state.formAvatar = { uri: r.uri };
        this.setState(state);
      }
    });

  }

  cadastrar() {
    if (
      this.state.formNome != "" &&
      this.state.formEmail != "" &&
      this.state.formSenha != "") {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let state = this.state;
          state.userUid = user.uid;
          this.setState(state);

          this.saveAvatar();


        }
      });
      alert("Email:" + this.state.formEmail);
      firebase.auth().createUserWithEmailAndPassword(this.state.formEmail, this.state.formSenha)
        .catch((error) => {
          alert(error.code);
        })
    } else (alert("Campo Vazio"))
  }

  saveAvatar() {
    let uri = this.state.formAvatar.uri.replace('file;//', '');
    let avatar = firebase.storage().ref().child('users').child(this.state.userUid + '.jpg');
    let mime = 'image/jpeg';
    RNFetchBlob.fs.readFile(uri, 'base64')
      .then((data) => {
        return RNFetchBlob.polyfill.Blob.build(data, { type: mime + ';BASE64' });
      }).then((blob) => {
        avatar.put(blob, { contentType: mime })
          .on('state_changed', (snapshot) => {

          }, (error) => {
            alert(error.code);
          },
            () => {
              this.saveUser();
              this.limpar();
              alert("Usuário Inserido com sucesso")
            })
      });
  }


  saveUser() {
    if (this.state.userUid != 0) {
      firebase.database().ref('users').child(this.state.userUid)
        .set({
          name: this.state.formNome,
          email: this.state.formEmail
        });
      alert("Usuário Salvo com Sucesso")
    }
  }


  render() {
    return (
      <View style={css.container}>
        <View style={css.areaCadastro}>
          <Text style={css.titulo}>Cadastre um novo Usuário</Text>
          <View style={css.form}>
            <View>
              <Image source={this.state.formAvatar} style={css.formAvatar} />
              <Button title="Carregar" onPress={this.carregar} />
            </View>
            <View style={css.formInfo}>
              <TextInput value={this.state.formNome}
                onChangeText={(formNome) => this.setState({ formNome })}
                style={css.input} placeholder="Digite seu nome" />

              <TextInput value={this.state.formEmail}
                onChangeText={(formEmail) => this.setState({ formEmail })}
                style={css.input} placeholder="Digite seu Email" />

              <TextInput value={this.state.formSenha} secureTextEntry={true}
                onChangeText={(formSenha) => this.setState({ formSenha })}
                style={css.input} placeholder="Digite sua senha" />
            </View>
          </View>
        </View>
        <View style={css.bt}>
          <Button title="Cadastrar" onPress={this.cadastrar} />

        </View>

        <View style={css.listaArea}>
          <FlatList
            data={this.state.lista}
            renderItem={({ item }) => <Usuario data={item}></Usuario>} />
        </View>



      </View>

    )
  }
}
