import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Item from '../ProjetoMobile/src/Item'

export default class TodoOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            input:''
        };
        this.url='https://b7web.com.br/todo/11606';

  
            this.addButton = this.addButton.bind(this);
            this.loadLista=this.loadLista.bind(this);

            this.loadLista();
    }

    loadLista(){

        fetch(this.url)
        .then((r) => r.json())
        .then((json) => {
            let state = this.state;
            state.lista = json.todo;
            this.setState(state);
        } );
    }

    addButton(){
        let texto =this.state.input;
        let state=this.state;
        state.input='';
        this.setState(state);

        fetch(this.url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                item:texto
            })
        })
        .then((r)=>r.json())
        .then((json)=>{
            this.loadLista();
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addArea}>
                    <Text style={styles.addTxt}>Adicionar Tarefa</Text>
                    <TextInput style={styles.input} onChangeText={(text)=> {
                        let state = this.state;
                        state.input=text;
                        this.setState(state);
                    } } value={this.state.input} ></TextInput>

                    <Button  title="Adicionar"  onPress={this.addButton}/>
                </View>
                <FlatList
                    data={this.state.lista}
                    renderItem={({ item }) => <Item data={item} url={this.url} loadFunction={this.loadLista}/>}
                    keyExtractor={(item, index) => item.id} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    addArea: {
        marginBottom: 20,
        backgroundColor: '#DDD',
       
    },
    input:{
        marginBottom:15,
        height:40,
        backgroundColor:'#CCC',
        marginLeft:20,
        marginRight:20,
        paddingLeft:10,
        paddingRight:10


    },
    addTxt:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        marginBottom:10,
        marginTop:10
    }
});