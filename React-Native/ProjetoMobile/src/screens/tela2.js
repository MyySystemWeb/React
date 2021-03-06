import React, { Component } from "react";
import { View, Text, Button,Image } from "react-native"
import { createBottomTabNavigator } from 'react-navigation-tabs';


class HomeScreen extends React.Component {
    static navigationOptions={

    
        tabBarLabel :'Home',
        tabBarIcon:()=>(
            <Image source={require('./images/placeholder.png')} />
        )
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {

    static navigationOptions={
        tabBarLabel :'Setting',
        tabBarIcon:()=>(
            <Image source={require('./images/menu.png')} />
        )
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class tela2 extends Component {

    static navigationOptions={
        tabBarLabel :'Segunda',
        tabBarIcon:()=>(
            <Image source={require('./images/responsive.png')} />
        )
    }

    render() {
        return (
            <View>
                <Button title='Ir para Tela 01' onPress={() => this.props.navigation.goBack()}></Button>
                <Text>Nome > {this.props.navigation.getParam('nome', 'n/a')}</Text>
                <Text>Idade > {this.props.navigation.getParam('idade', '0')}</Text>
                <Button title='Ir para Tela 01' onPress={() => this.props.navigation.navigate('Tela1')}></Button>
              
            </View>

        );
    }
}

const TabNavigator = createBottomTabNavigator({

    Home: HomeScreen,
    Settings: SettingsScreen,
    Tela2: tela2,
},
    {

        initialRouteName: 'Tela2',


        defaultNavigationOptions: {

            tabBarOptions: {
                showIcon:true,
                showLabel:true,
                activeTintColor: 'red',
                pressColor: '#ff0000',
                labelStyle: {
                    fontSize: 9
                },
                tabStyle: {
                    backgroundColor: 'black'
                }
            }
        }
    });
export default TabNavigator;