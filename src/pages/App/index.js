import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import {
  defaultTopNavigationOptions,
  defaultBottomNavigationOptions,
} from '../../style/defaultNavigationOptions';
import Home from './Home';
import { profileNavigator } from './Profile/Profile.navigator';
import Newsfeed from './Newsfeed';
import Account from './Account';

const TabNavigator = createBottomTabNavigator(
  {
    account: {
      screen: Account,
      navigationOptions: {
        title: 'Compte',
      },
    },
    newsfeed: {
      screen: Newsfeed,
      navigationOptions: {
        title: 'Events',
      },
    },
    home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    profile: {
      screen: profileNavigator,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'account',
    tabBarOptions: {
      ...defaultBottomNavigationOptions,
    },
  }
);

const CardNavigator = createStackNavigator(
  {
    main: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'main',
    navigationOptions: {
      ...defaultTopNavigationOptions,
    },
  }
);

const ModalNavigator = createStackNavigator(
  {
    main: {
      screen: CardNavigator,
    },
  },
  {
    initialRouteName: 'main',
    mode: 'modal',
    navigationOptions: {
      header: null,
    },
  }
);

export default ModalNavigator;
