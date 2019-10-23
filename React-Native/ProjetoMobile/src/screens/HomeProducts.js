import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet, Text } from 'react-native';

export default class HomeProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.navigation.state.params.products
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        tabBarLabel: 'HomeProducts',
        tabBarIcon: (focused, tintColor) => {

            if (focused) {
                return (
                    <Image source={require('./images/home_azul.png')} style={styles.icone} />
                );
            } else {
                return (
                    <Image source={require('./images/home_preto.png')} style={styles.icone} />
                );
            }
        }
    });
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => <ProductItem data={item} />}
                />
            </View>
        );
    }
}

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.productsItem}>
                <Image resizeMode="contain" source={this.props.data.img} style={styles.productsImagem} />
                <Text style={styles.productName}>{this.props.data.name}</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    icone: {
        width: 26,
        height: 26
    },
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#CCC'
    },
    productsItem: {
        height: 100,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    productsImagem: {
        height: 80,
        width:150
    },
    productName:{
        fontSize:16
    }
});