import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import StationCard from './StationCard';
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
    }
  }

  onLayout(){
    const markerRef = this.state.selectedStation && this.state.selectedStation.id
    const marker = this.refs[markerRef]
    marker && marker.showCallout();
  }

  render() {
    const { stations } = this.props
    return (
      <MapView
        onLayout={this.onLayout.bind(this)}
        style={styles.map}
        region={this.state.mapRegion}
        provider={"google"}
        showsUserLocation={true}
        toolbarEnabled = {true}
        zoomEnabled={true}
        >
        {stations.map(station => (
          <MapView.Marker
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            title={station.name}
            description={station.extra.description}
            key={station.id}
            station = { station }
            ref={station.id}
            >
             <MapView.Callout>
                <StationCard station={station} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    );
  }
}

export default Plan;
