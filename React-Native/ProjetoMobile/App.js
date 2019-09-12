import React, { Component } from "react";
import { Text, StyleSheet, Button, View } from "react-native";


var nome = "Xxxx";

const App = () => {

  function teste() {
    alert("oiiiii");
  }

  return (

    <View>
      <Text style={css.texto}>Olá  {nome} </Text>
      <Button title="Aperte" onPress={teste}></Button>
    </View >
  );
}

export default App;

const css = StyleSheet.create({
  texto: {
    color: "blue",
    fontSize: 22
  }
});