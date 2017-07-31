import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Header } from '.././components'

class PlanScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Plan',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-map"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };

  state = {  }
  render() {
    return (
      <Header title = "Plan"/>
    );
  }
}

export default PlanScreen;
