import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles  from '.././styles/styles'

class Header extends Component {

  onPressButton(){
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onPressButton.bind(this)} style={styles.header}>
          <Ionicons
            name="md-menu"
            size={24}
          />
          <Text style={styles.headerTitle}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
