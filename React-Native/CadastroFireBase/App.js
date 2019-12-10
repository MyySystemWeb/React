import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TextInput, Button, FlatList, ScrollView } from 'react-native';
import firebase from './src/firebase/firebaseConfig';
import css from './src/Estilo/estiloCss'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formAvatar: null,
      formNome: '',
      formEmail: '',
      formSenha: '',
      lista: [],
    }

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar() {

  }

  render() {
    return (
      <View >

        <ImageBackground source={require('./src/img/fd.jpg')} style={css.fundo}>

          <View style={css.areaCadastro}>
            
            <Text style={css.titulo}>Cadastrar Usuário</Text>
            <View style={css.form}>
            </View>
            <Image source={this.state.formAvatar} style={css.formAvatar} />
            <View style={css.formInfo}></View>
            <TextInput style={css.input}
              placeholder="Digite o Nome"
              value={this.state.formNome}
              onChangeText={({ formNome }) => this.setState({ formNome })}
            ></TextInput>

            <TextInput style={css.input}
              placeholder="Digite o E-mail"
              value={this.state.formEmail}
              onChangeText={({ formEmail }) => this.setState({ formEmail })}
            ></TextInput>

            <TextInput style={css.input}
              placeholder="Digite a Senha"
              value={this.state.formSenha}
              secureTextEntry={true}
              onChangeText={({ formSenha }) => this.setState({ formSenha })}
            ></TextInput>

            <View style={css.bt}>
              <Button title="Cadastrar" onPress={this.cadastrar}></Button>
            </View>
          </View>


          <View style={css.listaArea}>
            <FlatList
              data={this.state.lista}
              renderItem={(item) => {
                return (
                  <View style={css.itemArea}>
                    <Image source={item.avatar} style={css.itemAvatar} />
                    <View style={css.itemInfo}>
                      <Text>{item.nome}</Text>
                      <Text>{item.email}</Text>
                    </View>

                  </View>
                );
              }}>



            </FlatList>
          </View>

        </ImageBackground>
      </View>
    );
  }
}


