import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import StationCard from './StationCard';
import Marker from './Marker';
import styles from './styles/Plan'

const LATITUDE_DELTA = 0.00922*1.5
const LONGITUDE_DELTA =  0.00421*1.5
const DEFAULT_SELECTED_STATION_ID = '111'  // Oper in center

class Plan extends Component {
  constructor(){
    super()
    this.state = {
      mapRegion: null
    }
  }

  componentDidMount() {
    const selectedStation = this.props.selectedStation || this.props.stations.find( s=> s.extra.uid === DEFAULT_SELECTED_STATION_ID)

    const region = {
      latitude:       selectedStation.latitude,
      longitude:      selectedStation.longitude,
      latitudeDelta:  LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    this.onRegionChange(region);
  }

  onPressCard(station){
    console.log('card pressed on PlanScreen ')
  }

  onRegionChange(region) {
    this.setState({
      mapRegion: region
    });
  }

  render() {
    const { stations } = this.props
    return (
      <MapView
        ref={(ref) => { this.mapRef = ref }}
        style={styles.map}
        region={this.state.mapRegion}
        provider={"google"}
        showsUserLocation={true}
        toolbarEnabled = {true}
        zoomEnabled={true}
        onRegionChange={this.onRegionChange.bind(this)}
        >
        {stations.map(station => (
          <Marker
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            title={station.name}
            description={station.extra.description}
            key={station.id}
            //calloutVisible = { station.extra.uid === selectedStation.uid }
            >
             <MapView.Callout>
                <StationCard station={station} onPressCard={this.onPressCard.bind(this)} />
            </MapView.Callout>
          </Marker>
        ))}
      </MapView>
    );
  }
}

export default Plan;
