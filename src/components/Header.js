import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import styles  from './styles/Header'
import { colorWhite }  from '../styles/styles'

class Header extends Component {


  onPressMenuButton(){
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={this.onPressMenuButton.bind(this)}
        >
          <Ionicons
            name="md-menu"
            size={30}
            color={colorWhite}
          />
        </TouchableOpacity>
        <Text style = {styles.headerTitle}>
          CityBike Vienna
        </Text>

        {this.props.showRefreshButton ?
        <TouchableOpacity
         style={styles.headerIcon}
         onPress={this.props.onRefreshPress}
        >
          <Ionicons
            name="md-refresh"
            size={30}
            color={colorWhite}
          />
        </TouchableOpacity>
          : null }
      </View>
    );
  }
}

export default Header;
