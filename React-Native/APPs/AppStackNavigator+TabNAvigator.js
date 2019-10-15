import React, { Component } from "react"
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tela1 from './src/screens/tela1';
import Tela2 from './src/screens/tela2';

const AppNavigator = createStackNavigator({
    Tela1: {
        screen: Tela1
    },
    Tela2: {
        screen: Tela2,
            /** Configuração por tela */
        navigationOptions:{
            headerTintColor:'pink',
            headerTitleStyle:{
                fontSize:20
            }
        }
    },
},{
    /** Configuração padrão */
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'blue'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize:20
        }
    }
});
export default createAppContainer(AppNavigator);