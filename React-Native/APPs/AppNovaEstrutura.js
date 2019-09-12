import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";


const App = () => {
  return (
    <Text style={css.texto}>Nova Estrutura</Text>
  );
}
export default App;
const css = StyleSheet.create({
  texto: {
    color: "blue",
    fontSize: 22
  }
});
