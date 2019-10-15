import React, { Component } from "react";
import { View, Text, Button, TextInput,Image } from "react-native"

export default class tela5 extends Component {



    static navigationOptions = {
        drawerIcon:()=>(

            <Image source={require('./images/placeholder.png')} />
        ),
  
        title: 'Tela 5',
        /** Configuração por tela */
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        }
    }

    render() {
        return (
            <View>
           <Text>Olá</Text>
                    </View>

        );
    }
}

