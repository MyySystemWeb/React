import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList,ImageBackground } from 'react-native';

import MsgItem from '../ProjetoMobile/src/MsgItem'
export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {chat:[
      {key:'1', nome:'Helio Franca' , msg:'Oi', m:true},
      {key:'2', nome:'Aline Franca' , msg:'Olá', m:false},
      {key:'3', nome:'Helio Franca' , msg:'Tudo certo?', m:true},
      {key:'4', nome:'Aline Franca' , msg:'Sim, e vc?', m:false},
      {key:'5', nome:'Helio Franca' , msg:'Testando aqui uma mensagem grande para testar o comportamento no layoute', m:true},
      {key:'6', nome:'Aline Franca' , msg:'ah sim', m:false},
      {key:'7', nome:'Helio Franca' , msg:':)', m:true},
      {key:'8', nome:'Aline Franca' , msg:':)', m:false},
      {key:'9', nome:'Helio Franca' , msg:'Bye bye', m:true}
    ]
  }}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./src/screens/images/bg.jpg')} style={styles.chat}>
          <FlatList
            data={this.state.chat} 
            renderItem={({item})=> <MsgItem data={item}/>}
          />
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:(Platform.OS=='ios') ? 20: 0
  },
  chat: {
    flex:1
  }
});