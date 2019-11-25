import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../src/telas/login"
import Home from "../src/telas/home"
import Cadastro from "../src/telas/cadastrar"
import RedefinirSenha from "../src/telas/redefinirSenha"

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    /** Configuração por tela */
    navigationOptions: {
      title:"Login",
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

  Cadastro: {
    screen: Cadastro,
    /** Configuração por tela */
    navigationOptions: {
      title:"Cadastrar",
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  },

  Redefinir: {
    screen: RedefinirSenha,
    /** Configuração por tela */
    navigationOptions: {
      title:"Redefinir Senha",  
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