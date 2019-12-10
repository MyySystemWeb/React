import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../src/telas/tela1"
import Home from "../src/telas/tela2"


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    /** Configuração por tela */
    navigationOptions: {
      title:"Validação de Segurança",
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },
  Home: {
    screen: Home,
    /** Configuração por tela */
    navigationOptions: {
      title:"Home",
      header:null,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },


 
}, {
  /** Configuração padrão */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#037a76'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }
});
export default createAppContainer(AppNavigator);