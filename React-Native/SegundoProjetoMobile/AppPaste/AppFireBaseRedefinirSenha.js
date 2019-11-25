import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import firebase from './src/config/firebaseConfig';
import estilo from './src/estilo/estilizar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senhaNova: '',
      senhaAntiga: '',
    }
    this.redefinir=this.redefinir.bind(this);
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        user.updatePassword(this.state.senhaNova);
        alert('Senha alterada!')
      }
    });
  }

  redefinir(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senhaAntiga).catch((error)=>{
      alert(error.code);
    });
  }

  render() {
    return (
      <View style={estilo.container} >
          <View style={{ flex: 1 }}>
            <Text style={estilo.titulo}>Redefinir Senha</Text>
         
            <Text>E-Mail</Text>
            <TextInput onChangeText={(email) => this.setState({ email })} style={estilo.input}></TextInput>
            
            <Text>Senha Antiga</Text>
            <TextInput secureTextEntry={true} onChangeText={(senhaAntiga) => this.setState({ senhaAntiga })} style={estilo.input}></TextInput>
            
            <Text>Nova Senha</Text>
            <TextInput secureTextEntry={true} onChangeText={(senhaNova) => this.setState({ senhaNova })} style={estilo.input}></TextInput>

            <View style={{ marginTop: 10 }}>
              <Button title="Redefinir Senha" onPress={this.redefinir} />
            </View>
          </View>
      </View>
    );
  }
}