import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import StationsScreen from '.././screens/StationsScreen'
import PlanScreen from '.././screens/PlanScreen'
import NearMeScreen from '.././screens/NearMeScreen'

export default DrawerNavigator({
  Stations: {
    screen: StationsScreen
  },
  Plan: {
    screen: PlanScreen
  },
  NearMe: {
    screen: NearMeScreen
  }
},
{
  initialRouteName: 'Stations',
  contentOptions: {
    activeTintColor: '#FF0000',
  },
})
