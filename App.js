import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerView, DrawerItems, SafeAreaView } from 'react-navigation';
import { Root } from "native-base";
import SideBar from "./src/screens/sidebar/";
import InicioScreen from './src/screens/InicioScreen'
import InfoScreen from './src/screens/InfoScreen'
import CrearScreen from './src/screens/CrearScreen'
import CambiarPasswordScreen from './src/screens/CambiarPasswordScreen'
import PerfilScreen from './src/screens/PerfilScreen'
import DetalleScreen from './src/screens/DetalleScreen'

const Menu = DrawerNavigator({
  Inicio: { screen: InicioScreen },
  Info: { screen: InfoScreen },
  Crear: { screen: CrearScreen },
  CambiarPassword: { screen: CambiarPasswordScreen },
  Perfil: { screen: PerfilScreen },
  Detalle: { screen: DetalleScreen },
},{
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: props => <SideBar {...props} />
});

const Nav = StackNavigator({
  Menu:       { screen: Menu },
},{
  initialRouteName: "Menu",
  headerMode: "none"
});

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Nav />
      </Root>
    );
  }
}
