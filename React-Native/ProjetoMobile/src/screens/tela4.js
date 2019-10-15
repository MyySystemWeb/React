import React, { Component } from "react";
import { View, Text, Button } from "react-native"
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


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

class tela4 extends Component {

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

const TabNavigator = createMaterialBottomTabNavigator({

    Home: HomeScreen,
    Settings: SettingsScreen,
    Tela4: tela4,
},
    {

        initialRouteName: 'Tela4',
        animatedEnabled:true,
        order:['Tela4','Home','Settings'],
        tabBarOptions:{
    
            activeTintColor:'red'

        },         

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