import React, { Component } from "react";
import { Text, StyleSheet, View,Button } from "react-native";


export default class App extends Component {
  somar(n1, n2) {
    return n1 + n2;
  }
  render() {
    let nome = "Helio"
    return (
      <View>
        <Text style={css.texto} >A Soma é = {this.somar(3, 3)}</Text>
        <Button title="Alerta" onPress={()=>alert("oiii")}></Button>
      </View>
    );
  }
}

const css = StyleSheet.create({
  texto: {
    fontSize: 16,
    color: "blue"
  }
});
