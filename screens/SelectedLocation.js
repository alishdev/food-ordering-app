// SelectedLocation.js

import React from 'react';
import {View, Text, StyleSheet, Picker, TouchableOpacity} from 'react-native';
import StoreItem from '../components/StoreItem';
import SelectOrderTime from '../components/SelectOrderTime';
import Router from '../navigation/Router';

export default class SelectedLocation extends React.Component{
    static route = {
        navigationBar: {
        title: 'Selected Location',
        }
    }
    
    constructor(props){
        super(props);
        this.state = (
            {
                store: this.props.route.params.store,    // parameter from parent screen in route.params
                selectedTimeOption: 0
            }
        );
    }

    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.caption}>Selected Location</Text>
                    <StoreItem store={this.state.store} key={this.state.store.storeid} />
                </View>
                <View style={styles.middle}>
                    <Text style={styles.caption}>Pickup Time</Text>
                    <Picker
                        selectedValue={this.state.selectedTimeOption}
                        onValueChange={(option) => this.setState({selectedTimeOption: option})}>
                        <Picker.Item label="ASAP" value="0" />
                        <Picker.Item label="Later Time" value="1" />
                    </Picker>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this._gotoMenu.bind(this)}
                    >
                        <Text style={styles.buttonText}>
                            GO TO MENU
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _gotoMenu(){
        this.props.navigator.push(Router.getRoute('menu', {store: this.state.store}));
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        flex:3
    },
    middle:{
        flex:3
    },
    bottom:{
        flex:1
    },
    button:{
        alignSelf: 'stretch',
        backgroundColor: 'orange'
    },
    buttonText:{
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    caption:{
        alignSelf: 'center',
        fontSize: 24
    }
});