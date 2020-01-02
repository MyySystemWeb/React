import React, { Component } from 'react';
import { View, Text} from 'react-native';
import css from '../Estilo/estiloCss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Teste</Text>
            </View>
        )
    }
}

