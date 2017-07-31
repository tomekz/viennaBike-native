import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import StationsScreen from '.././screens/StationsScreen'
import PlanScreen from '.././screens/PlanScreen'
import NearMeScreen from '.././screens/NearMeScreen'

export default DrawerNavigator({
  Stations: {
    path: '/',
    screen: StationsScreen
  },
  Plan: {
    path: '/plan',
    screen: PlanScreen
  },
  NearMe: {
    path: '/near',
    screen: NearMeScreen
  }
},
{
  initialRouteName: 'Stations',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
})
