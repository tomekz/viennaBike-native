import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles  from './styles/FloatingButton'

class FloatingButton extends Component {

  onPressButton(){
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    return (
        <TouchableOpacity onPress={this.onPressButton.bind(this)} style={styles.button}>
          <Ionicons
            name="md-menu"
            size={24}
          />
        </TouchableOpacity>
    );
  }
}

export default FloatingButton;
