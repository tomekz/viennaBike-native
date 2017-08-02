import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import StationsScreen from '.././screens/StationsScreen'
import PlanScreen from '.././screens/PlanScreen'
import AboutScreen from '.././screens/AboutScreen'

export default DrawerNavigator({
  Stations: {
    screen: StationsScreen
  },
  Plan: {
    screen: PlanScreen
  },
  AboutMe: {
    screen: AboutScreen
  }
},
{
  initialRouteName: 'Stations',
  contentOptions: {
    activeTintColor: '#FF0000',
  },
})
