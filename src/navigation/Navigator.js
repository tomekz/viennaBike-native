import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import StationsScreen from '.././screens/StationsScreen'
import PlanScreen from '.././screens/PlanScreen'
import AboutScreen from '.././screens/AboutScreen'
import FavoriteScreen from '.././screens/FavoriteScreen'
import { cPrimaryGreen } from '../styles/styles'


export default DrawerNavigator({
  Stations: { screen: StationsScreen },
  Plan: { screen: PlanScreen },
  Favorite: { screen: FavoriteScreen },
  AboutMe: { screen: AboutScreen }
},
{
  contentOptions: {
    activeTintColor: cPrimaryGreen,
  }
})
