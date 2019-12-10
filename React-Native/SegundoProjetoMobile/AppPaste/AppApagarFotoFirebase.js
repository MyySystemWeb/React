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
      caminhoFireBase:"",
      foto: { uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi2vseApKnmAhV_H7kGHdgdDvkQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.techtudo.com.br%2Fdicas-e-tutoriais%2Fnoticia%2F2015%2F08%2Fcomo-mudar-foto-de-perfil-do-facebook-e-continuar-com-curtidas.html&psig=AOvVaw2rNSGw9-lwv8tH52oNY5Jk&ust=1576005461598548' },
      pct: 10,
    }
    this.pegarFoto = this.pegarFoto.bind(this);
    this.remover = this.remover.bind(this);
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
                state.caminhoFireBase=fileName;
                this.setState(state);

              }, (error) => {
                alert(error.code);
              }, () => {
                //N SEI O Q FAZ, MAS N CHEGOU
                imagem.getDownloadURL().then(
                  (url) => {
                    let state = this.state;
                    state.foto = { uri: url };
                    this.setState(state);
                  });
              })

          });


      }
    })
  }

  remover() {

    alert("Botão Desabilitado!!! hahahaa");
    //firebase.removerImagem(this.state.caminhoFireBase);
  }

  render() {
    return (
      <View>
        <View >
          <Text style={{ fontSize: 26, marginBottom: 10 }}>App</Text>
          <Button title="Carregar Foto " onPress={this.pegarFoto} />
          <Text>{this.state.pct}%</Text>
        </View >

        <View style={{ width: (this.state.pct + '%'), height: 40, backgroundColor: '#ff0000' }} />
        <Image source={this.state.foto} style={{ height: 300, width: 300, backgroundColor: 'gray' }} ></Image>
        <Button title="Remover Avatar"  onPress={this.remover} ></Button>
      </View>

    );
  }
}