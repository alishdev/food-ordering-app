// MenuScreen.js
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
//import Expo, {AppLoading} from 'expo';
import MenuItem from '../components/MenuItem';

export default class Menu extends React.Component{
    static route = {
        navigationBar:{
            title: 'Menu'
        }
    }
    state = {
        isReady: false,
        store: this.props.route.params.store,
        categories: []
    };
    componentWillMount(){
        this._getMenu();
    }
    render(){
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
        else{
            return (
                <View style={{flex:1}}>
                    <ScrollView>
                        {this._renderCategories()}
                    </ScrollView>
                </View>
            )
        }
    }

    _renderCategories(){
        return this.state.categories.map(item => 
            <MenuItem key={item.id} category={item} />
        );
    }

    async _getMenu(){
        console.log('get menu');
        try
        {
            let url = `https://dev-data-access-api.azurewebsites.net/api/v2/${this.state.store.customerid}/${this.state.store.storeid}/Menu`;
            let response = await fetch(url);
            let body = await response.json();
            //console.log(body);

            let categories = await body.Categories.map(category =>{
                return {
                    id: category.ID,
                    title: category.Title,
                    menuitemid: category.MenuItems.length > 0 ? category.MenuItems[0].ID : null,
                    image: null
                };
            });

            for(let category of categories){
                let menuitemid = category.menuitemid;
                url = `https://dev-data-access-api.azurewebsites.net/api/v2/${this.state.store.customerid}/${this.state.store.storeid}/MenuItem?menuItemID=${menuitemid}`;
                response = await fetch(url);
                body = await response.json();
                if (body.Data && body.Data.ImageOriginal)
                    category.image = body.Data.ImageOriginal;
                else if (body.Data && body.Data.WebDesktopImage)
                    category.image = body.Data.WebDesktopImage;
                //console.log(category);
            }

            this.setState({
                isReady : true,
                categories: categories
            });
        }catch(e){
            console.log('error ' + e.message);
        }
    }
}