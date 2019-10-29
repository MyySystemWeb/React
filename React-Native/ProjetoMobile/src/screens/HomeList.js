import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableHighlight, Text } from 'react-native';

export default class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                key: 1,
                title: 'Prato Executivo',
                img: require('../screens/images/tipos/pe.png'),
                description: 'Pratos preparados na hora',
                bg: '#e35339',
                products: [
                    { key: 1, name: 'Prato de Frango', img: require('../screens/images/cardapio/pe/executivos_frang_.png') },
                    { key: 2, name: 'Prato de Peixe', img: require('../screens/images/cardapio/pe/executivos_peix_.png') },
                    { key: 3, name: 'Prato de Picanha', img: require('../screens/images/cardapio/pe/executivos_picanh_.png') }
                ]
            },

            {
                key: 2,
                title: 'Saladas',
                img: require('../screens/images/tipos/saladas.png'),
                description: 'Pratos de saladas',
                bg: '#a6bb24',
                products: [
                    { key: 1, name: 'Salada de Frango', img: require('../screens/images/cardapio/saladas/salada-fr.png') },
                    { key: 2, name: 'Salada agua doce', img: require('../screens/images/cardapio/saladas/salada_aguadoc_.png') },
                    { key: 3, name: 'salada de salmão', img: require('../screens/images/cardapio/saladas/salada_salma.png') }
                ]
            },

            {
                key: 3,
                title: 'Bebidas',
                img: require('../screens/images/tipos/bebidas.png'),
                description: 'Opções de Bebidas',
                bg: '#079ed4',
                products: [
                    { key: 1, name: 'Caipirosca', img: require('../screens/images/cardapio/bebidas/capirosc_3.png') },
                    { key: 2, name: 'Cookie Cream', img: require('../screens/images/cardapio/bebidas/cookies_crea.png') },
                    { key: 3, name: 'Morango GD', img: require('../screens/images/cardapio/bebidas/morango_gd.png') },
                    { key: 4, name: 'Prata', img: require('../screens/images/cardapio/bebidas/patra.png') },
                    { key: 5, name: 'Suco Fitness', img: require('../screens/images/cardapio/bebidas/suco_fitines_gd.png') },

                ]
            },

            {
                key: 4,
                title: 'Sobremesas',
                img: require('../screens/images/tipos/sobremesa.png'),
                description: 'Sobremesas da casa',
                bg: '#fcb81c',
                products: [
                    { key: 1, name: 'Brownie', img: require('../screens/images/cardapio/sobremesas/brownie_gd.png') },
                    { key: 2, name: 'Cookie Cream', img: require('../screens/images/cardapio/sobremesas/creme_papaya_cassis_gd.png') },
                    { key: 3, name: 'Morango GD', img: require('../screens/images/cardapio/sobremesas/delicia_gelada_gd.png') },

                ]
            },
            ]


        };
    }
    static navigationOptions = {
        title: 'Restaurante X',
        tabBarLabel: 'Home',

    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => <Lista data={item} navigation={(this.props.navigation,item)} />} />
            </View>
        );
    }

}
class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <TouchableHighlight underlayColor="#CCC"
                onPress={() => this.props.navigation.navigate('HomeProducts', { title: this.props.data.title, products: this.props.data.products })
                } >
                <View style={[styles.listaItem, { backgroundColor: this.props.data.bg }]}>
                    <Image source={this.props.data.img} style={styles.listaImagem} />
                    <View>
                        <Text style={styles.listaTitle}>{this.props.data.title}</Text>
                        <Text style={styles.listaDescription}>{this.props.data.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>


        );
    };
}

const styles = StyleSheet.create({
    icone: {
        width: 26,
        height: 26
    },
    container: {
        flex: 1,
        marginTop: 10
    },
    listaItem: {
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listaImagem: {
        width: 64,
        height: 64,
        marginLeft: 20,
        marginRight: 20

    },
    listaTitle: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    listaDescription: {
        color: '#FFF',
        fontSize: 16,
    }

});