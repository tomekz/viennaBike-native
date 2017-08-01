import React, { Component } from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native'
import { Avatar} from 'react-native-elements'
import styles from './styles/StationsCard'
import commonStyles from '.././styles/styles'

class StationCard extends Component {

  onPressCard(e) {
    console.log(' card pressed')
  }

  render()
  {
    const { station } = this.props
    return (

      <TouchableOpacity onPress={this.onPressCard.bind(this)} style={styles.stationsListItem}>
        <View style={styles.stationsListItemTop}>
          <Avatar
            containerStyle = {styles.stationListItemAvatar}
            small
            rounded
            source={require('../img/citybike_logo.jpg')}
            overlayContainerStyle={{backgroundColor: '#fff'}}
          />
          <View style={styles.stationListItemTopContent}>
            <Text style={styles.stationListItemTopContentInfo}>
              Station {station.extra.internal_id}
            </Text>
            <Text style={commonStyles.textLightGrey}>
              {station.name}
            </Text>
          </View>
        </View>
        <View style={styles.stationsListItemBottom} >
            <Text style={[styles.stationListItemInfo, station.free_bikes == 0 && commonStyles.textRed]} >
              {station.free_bikes} bikes
            </Text>
            <Text style={styles.stationListItemInfo} >
              {station.extra.slots} free slots
            </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default StationCard;
