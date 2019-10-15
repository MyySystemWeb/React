import React, { Component } from "react"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tela1 from './src/screens/tela1';
import Tela2 from './src/screens/tela2';
import Tela3 from './src/screens/tela3';
import Tela4 from './src/screens/tela4';

const AppNavigator = createStackNavigator({
  Tela1: {
    screen: Tela1
  },
  Tela2: {
    
    screen: Tela2,
    /** Configuração por tela */
    navigationOptions: {
      title: 'Tela 2',

      headerMode: 'screen',
      headerBackTitleVisible: true,
      headerLayoutPreset: 'center',
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 20
      }
    }
  },
  Tela3: {
    screen: Tela3
  },
  Tela4: {
    screen: Tela4
  },

}, {
  /** Configuração padrão */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }
});
export default createAppContainer(AppNavigator);