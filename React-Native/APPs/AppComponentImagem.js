import React, { Component } from "react";
import { Text, Image, View } from "react-native";

class Imagem extends Component {
  render() {
    return (
      <Image source={this.props.caminho} style={{ marginTop: 30, height: parseInt(this.props.altura), width: parseInt(this.props.largura) }} />
    );
  }
}

export default class App extends Component {
  render() {
    let url = { uri: "https://firebasestorage.googleapis.com/v0/b/teste-63577.appspot.com/o/Imagens%2Fc3a5a15585487bd43a308928532f19c69fa818db_hq.gif?alt=media&token=8a826ab2-8709-489c-8bf0-dd3ff94c846b" };
    return (
      <View>
        <Text title="teste" />
        <Imagem caminho={url} altura="300" largura="300" />
      </View>
    );
  }
}
