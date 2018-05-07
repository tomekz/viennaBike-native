import React, { Component } from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native'
import { Avatar} from 'react-native-elements'
import styles from './styles/StationsCard'
import commonStyles from '.././styles/styles'

class StationCard extends Component {

  onPressCard() {
    this.props.onPressCard(this.props.station)
  }

  getStationIcon(station){
    if(station.free_bikes == 0){
      return require('../../assets/img/bikes_empty.png');
    }else if(station.empty_slots == 0){
      return require('../../assets/img/bikes_full.png');
    }else{
      return require('../../assets/img/citybike_logo.png');
    }
  }

  render()
  {
    const { station } = this.props
    return (
        <TouchableOpacity
        onPress={this.onPressCard.bind(this)}
        style={styles.card}>
          <View style={styles.cardTop}>
            <Avatar
              containerStyle = {styles.cardAvatar}
              small
              rounded
              source = { this.getStationIcon(station) }
              overlayContainerStyle={{backgroundColor: commonStyles.colorWhite}}
            />
            <View style={styles.cardTopContent}>
              <Text style={commonStyles.textRegular}>
                Station {station.extra.internal_id}
              </Text>
              <Text style={commonStyles.textLightGrey}>
                {station.name}
              </Text>
            </View>
          </View>
          <View style={styles.cardBottom} >
              <Text style={[commonStyles.textRegular, station.free_bikes == 0 && commonStyles.textRed]} >
               {station.free_bikes} bikes
              </Text>
              <Text style={commonStyles.textRegular}  >
               {station.empty_slots} free slots
              </Text>
               { station.distance &&
                <Text style={commonStyles.textBold} >
                  {station.distance} km
                </Text>
              }
          </View>
        </TouchableOpacity>
    )
  }
}

export default StationCard;
