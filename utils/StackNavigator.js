import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../containers/Login'
import BotNav from '../containers/BottomNavigation'
import Merchant from '../containers/Merchant'
import Profile from '../containers/Profile'
import Detail from '../containers/detailMerch'


const RootStack = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: BotNav },
    Merch: { screen: Merchant },
    Profile : { screen: Profile },
    DetailMerchant : {screen: Detail}
  },
  {
    initialRouteName: 'Login',
    // untuk hide header dari stack navigator
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    // sampai sini , untuk hide header dari stack navigator
    }
  },

);

class StackNav extends Component {

  render() {
    return (

      <RootStack />

    )
  }
}

export default StackNav;

