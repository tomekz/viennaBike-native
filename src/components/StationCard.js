import React, { Component } from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native'
import { Avatar} from 'react-native-elements'
import styles from './styles/StationsCard'
import commonStyles from '.././styles/styles'

class StationCard extends Component {

  onPressCard() {
    this.props.onPressCard(this.props.station)
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
              source={require('../img/citybike_logo.jpg')}
              overlayContainerStyle={{backgroundColor: commonStyles.colorWhite}}
            />
            <View style={styles.cardTopContent}>
              <Text style={styles.stationListItemTopContentInfo}>
                Station {station.extra.internal_id}
              </Text>
              <Text style={commonStyles.textLightGrey}>
                {station.name}
              </Text>
            </View>
          </View>
          <View style={styles.cardBottom} >
              <Text style={[ station.free_bikes == 0 && commonStyles.textRed]} >
                 bikes {station.free_bikes}
              </Text>
              <Text  >
                 slots {station.extra.slots}
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
