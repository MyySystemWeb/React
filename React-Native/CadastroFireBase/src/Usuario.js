import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import firebase from './firebase/firebaseConfig';
import css from './Estilo/estiloCss';

export default class Usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.data.key,
            name: this.props.data.name,
            email:this.props.data.email,
            avatar: null
        }

    

        firebase.storage().ref().child('users/'+this.state.key+'.jpg')
        .getDownloadURL().then((url)=>{
            let state = this.state;
            state.avatar={uri:url};
            this.setState(state);
            
        }).catch((error)=>{
            alert(error.code)
        });
    }
        render(){
            return (
                <View style={css.itemArea}>
                    <Image source={this.state.avatar} style={css.itemAvatar}></Image>
                    <View style={css.itemInfo}>
                        <Text>{this.state.name}</Text>
                        <Text>{this.state.email}</Text>
                    </View>
                </View>
            );
        }
    }

