import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={style.quadradoUm}></View>
                <View style={style.quadradoDois}></View>
                <View style={style.quadradoTres}></View>
                <View style={style.tamanhoFixo}></View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start", alignItems: "flex-end" }}>
                <View style={style.quadradoQuatro}></View>
            </View>


        </View>
    )
}
export default App;
const style = StyleSheet.create({
    quadradoUm: {
        flex: 1,
        backgroundColor: "blue"
    },
    quadradoDois: {
        flex: 1,
        backgroundColor: "green"
    },

    quadradoTres: {
        flex: 1
        ,
        backgroundColor: "red"
    },


    quadradoQuatro: {
        width: 40,
        height: 40,
        backgroundColor: "red"
    },
    tamanhoFixo: {
        height: 40,
        width: 40,
        color: "gray"
    }
})