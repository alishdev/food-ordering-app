// MenuItem.js
import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class MenuItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity style={styles.category}>
                        <View style={{flexDirection: 'row',flex:1}}>
                            <Image source={{uri: this.props.category.image || 'https://placehold.it/100x100'}} style={styles.image}/>
                            <Text style={styles.text}>{this.props.category.title}</Text>
                        </View>    
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth: 4,
        // borderColor: 'yellow',
        backgroundColor: '#eee'
    },
    image:{
        height: 100,
        width: 100,
        // borderWidth: 4,
        // borderColor: 'blue'
    },
    text: {
        fontSize: 20,
        color: "#851807",
        // borderWidth: 4,
        // borderColor: 'red',
        alignSelf: 'flex-start',
        fontFamily: 'Times New Roman'
    },
    category:{
        justifyContent: 'space-between',
        // borderWidth: 4,
        // borderColor: 'green',
        margin: 5,
        backgroundColor: 'white'
    }
});