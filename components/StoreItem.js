// StoreItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Router from '../navigation/Router';

export default class StoreItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {
            storeid,
            name,
            address1,
            city,
            state,
            zip,
            phone
        } = this.props.store;
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress = {this._selectStore.bind(this)}
                >
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.address}>
                    {address1}
                </Text>
                <Text style={styles.address}>
                    {city + ', ' + state + ' ' + zip}
                </Text>
                <Text style={styles.phone}>
                    Phone: {phone}
                </Text>
            </TouchableOpacity>
        );
    }

    _selectStore(){
            // this is how we pass parameters in route
        this.props.navigator.push(Router.getRoute('store', {store: this.props.store}));
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: 'white',
        alignSelf : 'stretch',
        margin: 5
    },
    name: {
        color:'#5C170C', 
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    address:{
        color: '#851807',
        fontSize: 24,
        fontFamily: 'Times New Roman',
        alignSelf: 'flex-start'
    },
    phone:{
        color: 'red',
        fontSize: 20
    }
});