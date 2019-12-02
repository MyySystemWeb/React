import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import imagePicker from "react-native-image-picker";
import RNFetchBlob from 'react-native-fetch-blob'
import firebase from './src/config/firebaseConfig'

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
    }
    this.pegarFoto = this.pegarFoto.bind(this);
  }

  pegarFoto() {

    let options = {
      title: "Selecionar Foto"
    }
    imagePicker.showImagePicker(options, (resposta) => {
      if (resposta.uri) {
        let imagem = firebase.acessarPastaAbaixo('imagem.jpg');
        let mime = 'image/jpeg'
        RNFetchBlob.fs.readFile(resposta.uri, 'base64')
          .then((data) => {
            return RNFetchBlob.polyfill.Blob.build(data, { type: mime + ';BASE64' });
          }).then((blob) => {
            imagem.put(blob, { contentType: mime })
              .then(() => {
                blob.close();
                alert("Terminou o Processo!");
              }).catch((error) => {
                alert(error.code);
              })
          });


      }
    })
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 26, marginBottom: 10 }}>App</Text>
        <Button title="Carregar Foto " onPress={this.pegarFoto} />
        <Image source={this.state.foto} style={{ height: 90, width: 90 }}></Image>
      </View>
    );
  }
}