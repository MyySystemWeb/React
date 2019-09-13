import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <MeuTextoDinamico titulo="Array de Nomes" />
  );
}
class MeuTextoDinamico extends Component {
  constructor(props) {
    super(props);
    this.state = {teste:"xxx"};

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
export default App;

const estilo = StyleSheet.create({
  texto: {
    marginTop: 10,
    color: "blue",
    fontSize: 25,
    textAlign: "center"
  },
  titulo: {
    fontSize: 35,
    color: "white",
    backgroundColor: "blue",
    textAlign: "center"
  }

});