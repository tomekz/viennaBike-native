import axios from 'axios';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StationsList, LoadingScreen, Header } from '../components';
import Icon  from 'react-native-vector-icons/Ionicons';
import { API_URL } from '.././config/config'
import Storage from '../lib/Storage';

class FavoriteScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Favorites',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="md-star"
        size={24}
        style={{ color: tintColor }}
      />
    )
  };

  constructor(){
    super()
    this.state = {
      stations : [],
      favStations: [],
      isLoading: true,
      error: ''
    }
  }

  componentDidMount(){
    Storage.getFavorites().then(favIds => {

        // Get all Stations and filter Favorites
        axios.get(API_URL).then(res =>{
          const stations = res.data.network.stations;
          let favStations = new Array();

          stations.forEach(station => {
            if(favIds.indexOf(station.extra.uid) != -1)
              favStations.push(station)
          });

          this.setState({
            stations: favStations,
            favStations: favIds,
            isLoading : false,
            error: ''
          });
        }).catch(err => {
          this.setState({
            isLoading: false,
            error: err
          });
        });

    }).catch(err => {
      this.setState({
          isLoading: false,
          error: err
      });
    });
  }

  render() {
    if(this.state.isLoading){
      return (
        <LoadingScreen/>
      );
    }else if(this.state.error){
      return (
        <View>
          <Text>{this.state.error}</Text>
        </View>
      );
    }

    return (
      <View>
        <Header navigation={this.props.navigation} />
        <StationsList stations={this.state.stations} navigation={this.props.navigation} favStations={this.state.favStations}/>
      </View>
    );
  }
}

export default FavoriteScreen;
