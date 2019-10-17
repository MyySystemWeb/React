import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, Alert } from 'react-native';

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: props.data.msg
        }
        this.click = this.click.bind(this);
    }

    click() {
        Alert.alert(" Chave:" + this.props.data.key);
    }
    render() {
        return (
            <TouchableHighlight onPress={this.click} underlayColor="#CCC">
                <View style={styles.item}>
                    <Image source={{ uri: this.props.data.img }} style={styles.imagem} />

                    <View style={styles.info}>
                        <Text style={styles.nome} numberOfLines={1} >{this.props.data.nome}</Text>
                        <Text numberOfLines={1} >{this.state.msg}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#CCC',
        flexDirection: 'row'
    },
    imagem: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 10
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});