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
        screen: Tela2
    }
});
export default createAppContainer(AppNavigator);