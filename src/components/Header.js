import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles  from './styles/Header'
import { colorWhite }  from '../styles/styles'

class Header extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerIcon} >
          <Ionicons
            name="md-menu"
            size={30}
            color={colorWhite}
          />
        </TouchableOpacity>
        <Text style = {styles.headerTitle}>
          CityBike Vienna
        </Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons
            name="md-refresh"
            size={30}
            color={colorWhite}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
