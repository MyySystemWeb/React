import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
	HomeList:{
        screen:HomeList,
        navigationOptions:{
            headerStyle: {
                backgroundColor: 'gray',
            },
         
            headerTintColor:'white',
            headerTitleStyle:{
                fontSize:20
            }
        }
	},
	HomeProducts:{
		screen:HomeProducts
	}
});

export default Navegador;