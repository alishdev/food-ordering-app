// SelectOrderTime.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RadioButton from '../components/RadioButton.js';

export default class SelectOrderTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => {this.setState({selectedIndex: 0})}}>  
                    <RadioButton selected={this.state.selectedIndex == 0} text="ASAP" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setState({selectedIndex: 1})}}>  
                    <RadioButton selected={this.state.selectedIndex == 1} text="Later time" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }
});