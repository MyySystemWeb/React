import React, {Component} from "react";
import {View, Text, Slider} from "react-native";


export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            valor:0
        }
    }

    render(){
        return(
            <View>
                <Slider minimumTrackTintColor={"red"} maximumTrackTintColor={"blue"}
                 maximumValue={100} minimumValue={1} onValueChange={(v)=>this.setState({valor:v})} value={this.setState.valor}></Slider>
                <Text>{this.state.valor.toFixed(0)}%</Text>
            </View>
        );
    }
}