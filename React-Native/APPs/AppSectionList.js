import React,{Component} from "react";
import {View,Text, SectionList} from "react-native"

export default class App extends Component{

    constructor(props){
        super(props);
        this.state={
            listaData:[
                {titulo:"A", data:[
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                    {nome:"Aline", idade:27},
                ]},
                {titulo:"H", data:[
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                    {nome:"Helio", idade:30},
                ]},
            ]                  
        };
    }
    meuItem(item){
        return(
            <Text>{item.nome}</Text>
        );
    }

    meuSection(section){
        return(
            <Text>{section.titulo}</Text>
        );

    }
    render(){
        return(
            <SectionList sections={this.state.listaData}  
            renderItem={({item})=> this.meuItem(item)}
            renderSectionHeader={({section})=>this.meuSection(section)}/>
        );
    }
}