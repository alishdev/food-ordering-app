//RadioButton.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class RadioButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.selected,
        };
    }

    render(){
        return (
            <View style={styles.container}>  
                    <View style={[{
                            height: 24,
                            width: 24,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: '#000',
                            alignItems: 'center',
                            justifyContent: 'center',
                            
                        }, this.props.style]}>
                            {
                            this.state.selected ?
                                <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#000',
                                }}/>
                                : null
                            }
                    </View>
                <Text>
                    some text
                    {this.props.text}
                </Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        
    }
});