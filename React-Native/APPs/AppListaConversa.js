import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ProjetoMobile/src/ListItem'
export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [{
        key: '1', img: 'https://www.b7web.com.br/avatar1.png', nome: 'Helio Franca', msg: 'Olá Mundo'
      },
      {
        key: '2', img: 'https://www.b7web.com.br/avatar2.png', nome: 'Aline Franca', msg: 'Olá Mundo'
      },
      {
        key: '3', img: 'https://www.b7web.com.br/avatar3.png', nome: 'Tete Franca', msg: 'Olá Mundo'
      },
      {
        key: '4', img: 'https://www.b7web.com.br/avatar1.png', nome: 'Helena Franca', msg: 'Olá Mundo'
      },
      {
        key: '5', img: 'https://www.b7web.com.br/avatar2.png', nome: 'Thami Franca', msg: 'Olá Mundo'
      },
      {
        key: '6', img: 'https://www.b7web.com.br/avatar3.png', nome: 'Luzia Franca', msg: 'Olá Mundo'
      },]
    };
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <FlatList data={this.state.list} renderItem={({item})=><ListItem data={item}/>} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS == 'ios') ? 20 : 0
  }
});