import React, { Component } from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import firebase from "../config/firebaseConfig";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: '',

    };


  }


  render() {
    return (
      <View >
        <ImageBackground source={require('../images/whatsfundo.jpg')} style={{ marginBottom: 30, width: '100%', height: '100%' }}>

          <ScrollView>
            <Text style={{ marginTop: 20, marginBottom: 10, marginLeft: 30, fontSize: 22, color: 'red' }} >
              Espiã detectada com sucesso! </Text>



            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              To certo!!!</Text>
            <Image source={require('../images/toceerto.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />



            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              Te peguei</Text>
            <Image source={require('../images/tepeguei.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />

            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              Não vai ver</Text>
            <Image source={require('../images/lari04.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />


            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              Gentiiii</Text>
            <Image source={require('../images/lari06.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />



            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              ...</Text>
            <Image source={require('../images/lari01.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />

            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              hahaha</Text>
            <Image source={require('../images/lari05.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />


            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              hihihih</Text>
            <Image source={require('../images/lari07.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />



            <Text style={{ marginTop: 20, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
              Volte Sempre! kkk</Text>
            <Image source={require('../images/hf.jpg')} style={{ height: 300, width: 300, marginLeft: 20 }} />


            <Text style={{ marginTop: 40, marginBottom: 50, marginRight: 10, marginLeft: 20, fontSize: 16, color: 'blue' }} >
             ;)</Text>


          </ScrollView>
        </ImageBackground>

      </View>
    );
  }
}
