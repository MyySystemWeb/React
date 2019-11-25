import React, { Component } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conexao: "X",
      ip: "",
      status: "",
      cellularGeneration:"",
      carrier:"",
      ssid:"",
      strenght:"",
      subnet:"",
      teste:"",
    }

    const unsubscribe = NetInfo.addEventListener(state => {
      let aux = this.state;
      aux.conexao = "Connection: " + state.type;
      aux.status = "Status: " + state.isConnected;
      aux.ip = "IP: " + state.details.ipAddress;
      aux.cellularGeneration = "Generation: " + state.details.cellularGeneration;
      aux.carrier = "Operador: " + state.details.carrier;
      aux.ssid = "ssid: " + state.details.ssid;
      aux.strenght="strenght: "+state.details.strenght;
      aux.subnet="subnet: "+state.details.subnet;
      aux.teste="teste: "+state.details.isConnectionExpensive;
      this.setState(aux);



    });
  }


  render() {
    return (
      <View>
        <Text style={{fontSize:26,marginBottom:10}}>CelInfo</Text>
        <Text>{this.state.status}</Text>
        <Text>{this.state.conexao}</Text>
        <Text>{this.state.ip}</Text>
        <Text>{this.state.cellularGeneration}</Text>
        <Text>{this.state.carrier}</Text>
        <Text>{this.state.strenght}</Text>
        <Text>{this.state.ssid}</Text>
        <Text>{this.state.subnet}</Text>
        <Text>{this.state.teste}</Text>
      </View>
    );
  }
}
