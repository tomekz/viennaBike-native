import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { StationCard, DirectionsToolbar }  from '../components';
import styles from './styles/Plan'

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
      selectedStation: selectedStation,
      hackLocationButton: 1
    }
  }

  onMarkerPress(e) {
    const destination = e.nativeEvent.coordinate
    this.directionsToolbar.show(destination)
  }

  onPress(e) {
    if (e.nativeEvent.action !== 'marker-press') { //user pressed anywhere else in the map,
      this.directionsToolbar.hide()
    }
  }

  componentWillMount() {
     //Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a map repaint.
    setTimeout(()=> this.setState({
      hackLocationButton: 0
    }),500);
  }
  render() {
    const { stations } = this.props
    return (
      <View style={{flex: 1, marginTop: this.state.hackLocationButton}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          toolbarEnabled = {false}
          zoomEnabled={true}
          onPress={this.onPress.bind(this)}
          >
          {stations.map(station => (
            <MapView.Marker
              coordinate={{
                latitude: station.latitude,
                longitude: station.longitude,
              }}
              image = {station.free_bikes == 0 ? require('../../assets/img/bikes_empty.png') : require('../../assets/img/citybike_logo.png')}
              title={`${station.extra.internal_id} ${station.name}`}
              description={`${station.free_bikes} bikes | ${station.empty_slots} empty slots`}
              key={station.id}
              ref={station.id}
              onPress={this.onMarkerPress.bind(this)}
              >
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
