import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Image } from "react-native";

import Tela1 from '../ProjetoMobile/src/screens/tela1'
import Tela2 from '../ProjetoMobile/src/screens/tela2'
import Tela3 from '../ProjetoMobile/src/screens/tela3'
import Tela4 from '../ProjetoMobile/src/screens/tela4'
import Tela5 from '../ProjetoMobile/src/screens/tela5'

const DrawerNavigator = createDrawerNavigator({
  Tela1: {
    screen: Tela1,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Image source={require('./src/screens/images/placeholder.png')} />
      )
    }
  }, Tela2: {
    screen: Tela2,

    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Image source={require('./src/screens/images/responsive.png')} />
      )
    }
  },
  Tela3: Tela3,
  Tela4: Tela4,
  Tela5: Tela5,
}, {
  drawerPosition: 'right',
  drawerWidth: 250,
  drawerBackgroundColor: 'blue',
  contentOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#fff',
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#000'


  }
});

export default Router = createAppContainer(DrawerNavigator);