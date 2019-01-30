import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { StationCard, DirectionsToolbar }  from '../components';
import styles from './styles/Plan'
import Icon from 'react-native-vector-icons/Ionicons';
import Storage from '../lib/Storage';

const LATITUDE_DELTA = 0.00922*1.5
const LONGITUDE_DELTA =  0.00421*1.5
const DEFAULT_SELECTED_STATION_ID = '111'  // Oper in center

class Plan extends Component {

  constructor(props){
    super()
    const selectedStation = props.selectedStation || props.stations.find( s=> s.extra.uid === DEFAULT_SELECTED_STATION_ID)
    const region = {
      latitude:       selectedStation.latitude,
      longitude:      selectedStation.longitude,
      latitudeDelta:  LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    this.state = {
      mapRegion: region,
      selectedStation,
      hackLocationButton: 1,
      favStations: []
    }
  }

  onMarkerPress(e) {
    const destination = e.nativeEvent.coordinate
    this.directionsToolbar.show(destination)
  }

  onPress(e) {
    if (e.nativeEvent.action !== 'marker-press') { // user pressed anywhere else in the map,
      this.directionsToolbar.hide()
    }
  }

  onFavPress(station){
    Storage.toggleFavorite(station.extra.uid).then((newFav) => {
        this.setState({
            mapRegion: {  // Prevent Map from recentering to default
              latitude: station.latitude,
              longitude: station.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            },
            selectedStation: station,
            favStations: newFav
        });
    }).catch(err =>{
      console.log(err);
    });
  }

  getStationIcon(station){
    if(station.free_bikes == 0){
      return require('../../assets/img/bikes_empty.png');
    }else if(station.empty_slots == 0){
      return require('../../assets/img/bikes_full.png');
    }
      return require('../../assets/img/citybike_logo.png');
    
  }

  componentWillMount() {
     // Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a map repaint.
    setTimeout(()=> this.setState({
      hackLocationButton: 0
    }),500);
  }

  componentDidMount(){
    Storage.getFavorites().then(value => {
      this.setState({
        favStations: value
      });
    }).catch(err =>{
      console.log(err);
    })
  }

  render() {
    const { stations } = this.props
    return (
      <View style={{flex: 1, marginTop: this.state.hackLocationButton}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation
          toolbarEnabled = {false}
          zoomEnabled
          onPress={this.onPress.bind(this)}
          >
          {stations.map(station => (
            <MapView.Marker
              coordinate={{
                latitude: station.latitude,
                longitude: station.longitude,
              }}
              image = { this.getStationIcon(station) }
              key={station.id}
              ref={station.id}
              onPress={this.onMarkerPress.bind(this)}
              >

              <MapView.Callout onPress={() => this.onFavPress(station)}>
                <View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.title}>
                      {station.extra.internal_id} {station.name}
                    </Text>
                    <Icon
                      style={{marginLeft: 5}}
                      name={ this.state.favStations.indexOf(station.extra.uid) != -1 ? "md-star" : "md-star-outline" }
                      size={20}
                    />
                  </View>
                  <Text>{station.free_bikes} bikes | {station.empty_slots} empty slots</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
        <DirectionsToolbar
          ref = { (ref) => this.directionsToolbar = ref }
        />
      </View>
    );
  }
}

export default Plan;
