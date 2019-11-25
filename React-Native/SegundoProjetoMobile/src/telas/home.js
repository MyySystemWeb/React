import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import firebase from "../config/firebaseConfig";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome:'',
      userId: this.props.navigation.state.params.nome,
    };
    
  }

  render() {
    return (
      <View >
  <Text>Olá--,{this.state.userId} </Text>

     </View>
    );
  }
}
