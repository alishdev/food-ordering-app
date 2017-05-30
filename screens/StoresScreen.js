// stores.js
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import StoreItem from '../components/StoreItem';

const dummyData = [];
export default class StoresScreen extends React.Component{
    state = {
        isReady: false,
        data: dummyData
    };

  static route = {
    navigationBar: {
      title: 'Select a Store',
    }
  }

  componentWillMount() {
    this._getStores();
  }

  render() {
    if (!this.state.isReady) {
      return (
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>    
                    <Image
                        source={require('../assets/icons/loading.gif')}
                        style={{width:100, height:100}}
                        />
                </View>
            );
    }
    return (
        <ScrollView style={{backgroundColor: '#eee'}}>    
            {this._renderStores()}
        </ScrollView>
     
    )
  }

  _renderStores(){
      return this.state.data.map(store => 
        <StoreItem store={store} key={store.storeid} navigator={this.props.navigator} />
      );
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }

  async _getStores() {
      try
      {
        let url = 'https://dev-data-access-api.azurewebsites.net/api/v2/2050/Location';
        let response = await fetch(url);
        let body = await response.json();
        
        let newStores = await body.map(store =>{
            return {
                name: store.Name,
                storeid: store.LocationID,
                address1: store.Address,
                zip: store.PostalCode,
                state: store.State,
                city: store.City,
                phone: store.Phone,
                customerid: store.CustomerID
            };
        });

        this.setState({
            isReady: true,
            data: dummyData.concat(newStores)
        });
      }catch(e){
          console.log('getstores failed: ' + e.message);
      }

  }  
}


 
