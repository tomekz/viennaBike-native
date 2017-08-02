import React, { Component } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FloatingButton, Plan, LoadingScreen } from '.././components';
import styles from '.././styles/styles';
import { API_URL } from '.././config/config'
import axios from 'axios'

const DEFAULT_SELECTED_STATION_ID = '111'

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
      selectedStation : null,
      isLoading: true,
      error: ''
    }
  }

  componentDidMount(){
    axios.get(API_URL)
      .then(res => {
        const stations = res.data.network.stations
        this.setState({
          stations : stations,
          selectedStation : stations.find( s => s.extra.uid === DEFAULT_SELECTED_STATION_ID),
          isLoading : false,
          error: ''
        })
      })
      .catch( err => this.setState({ error : err }))
  }


  render() {
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
        <Plan stations={this.state.stations} selectedStation={this.state.selectedStation} />
      </View>
    );
  }
}

export default PlanScreen;
