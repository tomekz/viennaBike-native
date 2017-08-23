import axios from 'axios'
import React, { Component } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FloatingButton, Plan, LoadingScreen } from '.././components';
import styles from '.././styles/styles';
import { API_URL } from '.././config/config'

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

  constructor(){
    super()
    this.state = {
      stations : [],
      isLoading: true,
      error: '',
    }
  }

  componentDidMount(){
    axios.get(API_URL)
      .then(res => {
        const stations = res.data.network.stations
        this.setState({
          stations : stations,
          isLoading : false,
          error: ''
        })
      })
      .catch( err => this.setState({ error : err }))
  }

  render() {
    const { params } = this.props.navigation.state;
    if (this.state.error) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    else if(this.state.isLoading){
      return (
       <LoadingScreen/>
      );
    }

    return (
      <View style={{flex: 1}}>
        <FloatingButton navigation={this.props.navigation}/>
        <Plan stations={this.state.stations} selectedStation={ params && params.selectedStation } />
      </View>
    );
  }
}

export default PlanScreen;
