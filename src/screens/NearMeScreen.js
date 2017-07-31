import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Header } from '.././components'


class NearMeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Near me',
     drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-locate"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };
  state = {  }
  render() {
    return (
      <Header title = "Near me" navigation={this.props.navigation}/>

    );
  }
}

export default NearMeScreen;
