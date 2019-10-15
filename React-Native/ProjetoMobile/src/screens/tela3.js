import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native"
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}
class tela3 extends Component {
    static navigationOptions={
        drawerIcon:()=>(
            <Image source={require('./images/responsive.png')} />
        )
    }
    render() {
        return (
            <View>
                <Button title='Ir para Tela 01' onPress={() => this.props.navigation.goBack()}></Button>
                <Text>Nome > {this.props.navigation.getParam('nome', 'n/a')}</Text>
                <Text>Idade > {this.props.navigation.getParam('idade', '0')}</Text>
            </View>
        );
    }
}
const TabNavigator = createMaterialTopTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    Tela3: tela3,
},
    {
        initialRouteName: 'Tela3',
        defaultNavigationOptions: {
            navigationOptions: {
                headerTitle: 'Home!',
            },
            tabBarOptions: {
                labelStyle: {
                    fontSize: 16
                }
            }
        }
    });
export default TabNavigator;