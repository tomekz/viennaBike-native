import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


class AboutScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'About',
     drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-information-circle"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>
           about...
        </Text>
      </View>
    );
  }
}

export default AboutScreen;
