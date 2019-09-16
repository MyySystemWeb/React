import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet,Button, Alert } from "react-native"


export default class App extends Component  {

    constructor(props){
        super(props);
        this.state={nome:"..."};
        this.digitou= this.digitou.bind(this);
        this.apertou= this.apertou.bind(this);
        this.apertou2= this.apertou2.bind(this);
    }

    digitou(txt){
        let stateAux = this.state;
        stateAux.nome=txt;
        this.setState(stateAux);


    }

    apertou(){
        Alert.alert("Oi");

    }

    apertou2(){
        alert("Oi");

    }

    render(){
        return(
            <View>
                <TextInput style={style.meuInput} onChangeText={this.digitou}></TextInput>
                <Text>Digitou: {this.state.nome} </Text>
                <Text>Digitou: {this.state.nome.length} </Text>
                <Button onPress={this.apertou} title="Acionar"></Button>
                <Button onPress={this.apertou2} title="Acionar2"></Button>
            </View>
        );
    }

}

const style = StyleSheet.create({
    meuInput:{
        borderWidth:1,
        borderColor:"red",
        marginTop:10

    }
});