// MainScree.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import Router from '../navigation/Router';

export default class MainScreen extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View style={styles.container}>
        
            
                <View style={styles.top}>
                    <Text style={styles.title}>Food Ordering App</Text>
                </View>
                <Image 
                    source={require('../assets/images/background2.png')}
                    style={styles.backgroundImage} >
                
                    <View style={styles.middle}>
                        <Text style={styles.text}>Have an account?</Text>
                        <TouchableOpacity 
                            style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity 
                            style={styles.orderButton}>
                            <Text style={styles.orderButtonText}
                            onPress = {this._startOrder.bind(this)}
                        >Start Your Order</Text>
                        </TouchableOpacity>
                    </View>
            
                </Image>
            </View>
        );
    }

    _startOrder(){
        this.props.navigator.push(Router.getRoute('stores'));
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bottomContainer:{
        flex : 7,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf:'stretch',
        
    },
    backgroundImage:{
        flex: 7,
        resizeMode: 'cover',
        alignSelf:'stretch',
        height:null,
        width:null,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    top:{
        flex:1,
        alignSelf:'stretch',
        //borderWidth: 4,
        //borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    middle:{
        flex: 3,
        alignSelf:'stretch',
        //borderWidth: 4,
        //borderColor: 'red',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    bottom:{
        flex : 5,
        alignSelf:'stretch',
        //borderWidth: 4,
        //borderColor: 'blue'
    },
    title: {
        fontSize: 32,
        color: 'orange'
    },
    button:{
        //borderWidth: 4,
        //borderColor: 'purple',
        alignSelf:'center'
    },
    buttonText:{
        fontSize: 28,
        textAlign:'center',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0)',   // transparent text
    },
    text: {
        //borderWidth: 4,
        //borderColor: 'yellow',
        alignSelf:'center',
        fontSize: 24,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    orderButton:{
        //borderWidth: 4,
        //borderColor: 'purple',
        alignSelf:'stretch',
        height: 60,
        backgroundColor: 'orange',
        justifyContent: 'center'
    },
    orderButtonText:{
        fontSize: 28,
        textAlign:'center',
        color: 'white'
    },
});