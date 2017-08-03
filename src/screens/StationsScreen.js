import React, { Component } from 'react';
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FloatingButton,  StationsList, LoadingScreen } from '.././components'
import { API_URL } from '.././config/config'
import axios from 'axios'
import styles from '.././styles/styles'

class StationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Stations',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-bicycle"
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
      error: ''
    }
  }

  componentDidMount(){
    axios.get(API_URL)
      .then(res => {
        this.setState({
          stations : res.data.network.stations || [],
          isLoading : false,
          error: ''
        })
      })
      .catch( err => this.setState({ error : err }))
  }

  render() {
    if(this.state.isLoading){
      return (
       <LoadingScreen/>
      );
    }
    else if (this.state.error) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StationsList stations={this.state.stations} navigation={this.props.navigation} />
      </View>
    );

  }
}


export default StationsScreen;
