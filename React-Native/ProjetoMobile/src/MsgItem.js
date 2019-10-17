import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, Alert, Slider } from 'react-native';

export default class MsgItem extends Component {

    constructor(props) {
        super(props);
        this.estilo=styles.balaoEsquerdo;
        this.state = {
            msg: "Oi"
        };
        if(props.data.m){
            this.estilo=styles.balaoDireito

        }
       
    }
    render() {
        return (
          <View style={ [styles.balao,this.estilo]}>
              <Text style={styles.nome}>{this.props.data.nome}</Text>
              <Text>{this.props.data.msg}</Text>
              <Slider minimumValue={1} maximumValue={100} ></Slider>

                      
          </View>
        );
    }
}

const styles = StyleSheet.create({
    balao: {
        backgroundColor:'#ff0000',
        margin:10,
        padding:10,
        borderRadius:10
    },
    nome:{
        fontSize:15,
        fontWeight:'bold'
    },
    balaoEsquerdo:{
        marginRight:120,
        backgroundColor:"#ffffff",
        alignSelf:'flex-start'
    },
    balaoDireito:{
        marginLeft:120,
        backgroundColor:"#00ff00",
        alignSelf:'flex-end'
    }
});