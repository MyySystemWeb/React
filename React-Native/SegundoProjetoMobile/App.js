import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import imagePicker from "react-native-image-picker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
    }
    this.pegarFoto = this.pegarFoto.bind(this);
  }

  pegarFoto() {

    let options={
      title:"Selecionar Foto"
    }
    imagePicker.showImagePicker(options, (resposta) => {
      if (resposta.uri) {
        let foto = {uri:resposta.uri};
        let state = this.state;
        state.foto=foto;
        this.setState(state)
      }
    })
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 26, marginBottom: 10 }}>App</Text>
        <Button title="Carregar Foto " onPress={this.pegarFoto} />
        <Image source={this.state.foto} style={{height:90, width:90}}></Image>
      </View>
    );
  }
}