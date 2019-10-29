import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: (this.props.data.done == '1') ? styles.done : styles.undone
        };
        this.excluir = this.excluir.bind(this);
        this.marcar = this.marcar.bind(this);
    }



    excluir() {

        fetch(this.props.url + '/' + this.props.data.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((r) => r.json())
            .then((json) => {
                alert("Item excluído");
                this.props.loadFunction();
            })


    }

    marcar() {
        let state = this.state;
        let done = 'sim';
        if (this.state.done == styles.undone) {
            this.state.done = styles.done;
            done = 'sim';
        } else {
            this.state.done = styles.undone;
            done = 'nao';

        }

        fetch(this.props.url + '/' + this.props.data.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                done: done
            })
        })
            .then((r) => r.json())
            .then((json) => { })

        this.setState(state);
    }

    render() {
        return (
            <View style={styles.area}>
                <TouchableHighlight style={[styles.marcarArea, this.state.done]} onPress={this.marcar}>
                    <View>
                    </View>
                </TouchableHighlight >
                <Text>{this.props.data.item}</Text>
                <View  style={styles.botao} >
                <Button title="X" onPress={this.excluir}  />
                </View>
       
            </View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
backgroundColor:'#dee5eb',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderColor: '#CCC',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    marcarArea: {
        marginRight: 10,
        marginLeft: 10,
        width: 40,
        height: 40,
        backgroundColor: '#CCC'
    },
    undone: {
        backgroundColor: '#CCC'
    },
    done: {
        backgroundColor: '#00FF00'
    },
    botao: {

        alignItems:'center',
        width: 50,
        height: 50,
        flexDirection:'row',
        justifyContent :'flex-end',
        flex:1,
        margin:5,
        marginRight:15,

    }

});