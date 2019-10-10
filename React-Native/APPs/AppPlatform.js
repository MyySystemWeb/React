import React, { Component } from "react"
import { View, Text, Platform, StyleSheet } from "react-native";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { texto: '', infoDb:'' }
    }
    render() {
        return (
   <View>
       <Text style={estilo.sistema} >Sistema: {Platform.OS}</Text>
       <Text>Versão: {Platform.Version}</Text>
   </View>
        );
    }
}


const estilo = StyleSheet.create({

    sistema:Platform.select(
        {
            ios:{
                color:"red"
            },
            android:{
                color:"blue"
            }
        }
    )

});