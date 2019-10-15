import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Tela1 from './src/screens/tela1' 
import Tela2 from './src/screens/tela2' 

const DrawerNavigator = createDrawerNavigator({
  Home:Tela1,
  Home2:Tela2



});

export default Router = createAppContainer(DrawerNavigator);