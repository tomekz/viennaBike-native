import React, { Component } from 'react';
import { View , Text, PermissionsAndroid } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { FloatingButton,  StationsList, LoadingScreen, Header } from '.././components'
import GeolocationProvider from '.././lib/GeolocationProvider'
import Storage from '../lib/Storage';
import { API_URL } from '.././config/config'
import axios from 'axios'
import styles from '.././styles/styles'

const POSITION_UNAVAILABLE = 3

class StationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Stations',
    drawerIcon: ({ tintColor }) => (
      <Icon
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
      favStations: [],
      isLoading: true,
      error: ''
    }
    this.onRefreshPress = this.onRefreshPress.bind(this)
  }

  componentDidMount(){
   this.fetchStations()
  }

  async fetchStations(){
    try{
      const granted = await this.checkLocationPermissons()
      if(!granted) throw new Error('Permission to access location not granted. Please enable it manually in your device settings')

      const provider = new GeolocationProvider()
      const position = await provider.getPosition()
      const apiResponse = await axios.get(API_URL)
      const stations = apiResponse.data.network.stations

      stations.forEach( s => {
        const distance = provider.distance(position.coords.latitude, position.coords.longitude, s.latitude, s.longitude)
        s.distance = distance.toFixed(2)
      })

      stations.sort((a, b) => a.distance - b.distance )

      Storage.getFavorites().then(value => {
        this.setState({
          stations,
          favStations: value,
          isLoading: false,
          error: ''
        })
      }).catch(err =>{
        this.setState({
          isLoading: false,
          error: err
        })
      });

    }
    catch(err){
      this.setState({
        isLoading: false,
        error: err.code === POSITION_UNAVAILABLE ? new Error(`Unable to get current location. Tap 'refresh' button to try again`) : err
      })
    }
  }

  checkLocationPermissons() {
    return PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
  }

  onRefreshPress() {
    this.setState({isLoading: true})
    this.fetchStations()
  }

  render() {
    if(this.state.isLoading){
      return (
       <LoadingScreen/>
      );
    }
    else if(this.state.error) {
      return (
        <View style={{flex: 1}}>
          <Header navigation={this.props.navigation} showRefreshButton onRefreshPress={this.onRefreshPress} />
          <View style={styles.errorContainer}>
            <Icon
              name="md-warning"
              size={24}
            />
            <Text style={styles.errorMessage}>{this.state.error.message}</Text>
          </View>
       </View>
      );
    }

    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} showRefreshButton onRefreshPress={this.onRefreshPress} />
        <StationsList stations={this.state.stations} navigation={this.props.navigation} favStations={this.state.favStations} />
      </View>
    );
  }
}


export default StationsScreen;
