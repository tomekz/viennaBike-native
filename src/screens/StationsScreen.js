import React, { Component } from 'react';
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Header,  StationsList, LoadingScreen } from '.././components'
import { API_URL } from '.././config/config'
import axios from 'axios'

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
      .catch( err => this.setState({error : err}))
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
         <Header title = "Stations" navigation={this.props.navigation}/>
        <StationsList stations={this.state.stations} />
      </View>
    );

  }
}


export default StationsScreen;
