import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import imagePicker from "react-native-image-picker";
import RNFetchBlob from 'react-native-fetch-blob'
import firebase from '../src/config/firebaseConfig'


window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
      pct: 10,
    }
    this.pegarFoto = this.pegarFoto.bind(this);
  }

  pegarFoto() {

    let options = {
      title: "Selecionar Foto"
    }
    imagePicker.showImagePicker(options, (resposta) => {
      if (resposta.uri) {
        let fileName = resposta.fileName;
        let imagem = firebase.acessarPastaAbaixo(fileName);
        let mime = 'image/jpeg'
        RNFetchBlob.fs.readFile(resposta.uri, 'base64')
          .then((data) => {
            return RNFetchBlob.polyfill.Blob.build(data, { type: mime + ';BASE64' });
          }).then((blob) => {
            imagem.put(blob, { contentType: mime })
              .on('state_changed', (snapshot) => {
                let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                let state = this.state;
                state.pct = pct;
                this.setState(state);
                setTimeout(() => { alert("Aguardando") }, 100)

              }), (error) => {
                alert(error.code);
              }, () => {
                let url = imagem.getDownloadURL;
                alert("Imagem Salva com sucesso");
              }
          });
      }
    })
  }

  render() {
    return (
      <View>
        <View >
        <Text style={{ fontSize: 26, marginBottom: 10 }}>App</Text>
        <Button title="Carregar Foto " onPress={this.pegarFoto} />
        <Text>{this.state.pct}%</Text>
        </View >
        <View  style={{ width: (this.state.pct+'%'), height: 40, backgroundColor: '#ff0000' }}/>
      </View>
     
    );
  }
}