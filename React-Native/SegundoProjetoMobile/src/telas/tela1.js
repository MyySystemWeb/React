import React, { Component } from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import firebase from "../config/firebaseConfig";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: '',

    };
    this.tela02 = this.tela02.bind(this);

  }

  tela02() {
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <View >
        <ImageBackground source={require('../images/whatsfundo.jpg')} style={{ width: '100%', height: '100%' }}>
          <Text style={{ marginTop:20, marginBottom:20, marginLeft:30, marginRight:10, fontSize:18  }} >
            Os dados a seguir contém informações CONFIDÊNCIAS, deseja prosseguir?</Text>

          <View style={{ marginTop:20, marginLeft:50, marginRight:50  }}>
            <Button title='Sim' onPress={this.tela02}   ></Button>
          </View>
          <View style={{ marginTop:20, marginBottom:20, marginLeft:50, marginRight:50  }}>
            <Button title='Não' onPress={this.tela02}   ></Button>
          </View>

        </ImageBackground>

      </View>
    );
  }
}
