// stores.js
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Expo, {  Asset,  Components} from 'expo';
import StoreItem from '../components/StoreItem';

const dummyData = [
/*    {
        storeid: 1,
        name: 'Californian',
        address1: '8606 Daniel Street',
        zip: 21072,
        state: 'CA',
        city: 'San Juan',
        phone: '(454)565-9080'
    },
    {
        storeid: 2,
        name: 'Mid West',
        address1: '6060 Baniel Street',
        zip: 78783,
        state: 'IL',
        city: 'Warshington',
        phone: '(324)345-5654'
    },
    {
        storeid: 3,
        name: 'North Southern',
        address1: '474 Ganiel Street',
        zip: 56432,
        state: 'MI',
        city: 'San Franisco',
        phone: '(543)679-1482'
    }*/
];
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
      return <Expo.AppLoading />;
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


 
