import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import StationsScreen from '.././screens/StationsScreen'
import PlanScreen from '.././screens/PlanScreen'
import AboutScreen from '.././screens/AboutScreen'
import { colorPrimaryGreen } from '../styles/styles'


export default DrawerNavigator({
  Stations: { screen: StationsScreen },
  Plan: { screen: PlanScreen },
  AboutMe: { screen: AboutScreen }
},
{
  initialRouteName: 'Stations',
  contentOptions: {
    activeTintColor: colorPrimaryGreen,
  }
})
