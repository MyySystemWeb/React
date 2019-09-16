import React, { Component } from "react";
import { View, Text } from "react-native";
import estilo from "../MeuStyleSheet/CSS"

export default class MeuTextoDinamico extends Component {
  constructor(props) {
    super(props);
    this.state = { teste: "xxx" };

    var nomes = ["Helio", "Aline", "Teté"];

    setInterval(() => {
      var num = Math.floor(Math.random() * nomes.length);
      let objetoJs = { nome: nomes[num] };
      this.setState(objetoJs);
    }, 1500);

    setInterval(() => {
      let objetoJs = { teste: "Mudou" };
      this.setState(objetoJs);
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text style={estilo.titulo}>{this.props.titulo}</Text>
        <Text style={estilo.texto}>{this.state.teste}</Text>
        <Text style={estilo.texto}>{this.state.nome}</Text>
      </View>
    );

  }
}