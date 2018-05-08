import React, { Component } from 'react';
import { View, ListView, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Avatar} from 'react-native-elements'
import styles from './styles/StationsCard'
import commonStyles from '.././styles/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { FAV_KEY } from '../config/config';

class StationCard extends Component {

  constructor(props){
    super();

    this.state = {
      isFav: props.favorite
    }
  }

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

  onFavPress(){
    AsyncStorage.getItem(FAV_KEY).then(res => {
      let value = JSON.parse(res);

      // Ensures that 'value' is an array
      if(!Array.isArray(value)){
        value = new Array();
      }

      // Add/Remove id from Array
      let id = this.props.station.extra.uid;
      let index = value.indexOf(id);
      if(index == -1){
        value.push(id);
      }else{
        value.splice(index, 1);
      }

      this.setState((prevState) =>{
        return {
          isFav: !prevState.isFav
        };
      });

      AsyncStorage.setItem(FAV_KEY, JSON.stringify(value));
    }).catch(err =>{
      console.log(err);
    });
  }


  render()
  {
    const { station } = this.props
    return (
        <TouchableOpacity
        onPress={this.onPressCard.bind(this)}
        style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.cardAvatar}>
              <Avatar
                small
                rounded
                source = { this.getStationIcon(station) }
                overlayContainerStyle={{backgroundColor: commonStyles.colorWhite}}
              />
              <Icon
                style={{ position: 'absolute', top: 40}}
                name={ this.state.isFav ? "md-star" : "md-star-outline" }
                size={20}
                onPress={this.onFavPress.bind(this)}
              />
            </View>
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
              <Text style={[commonStyles.textRegular, station.empty_slots == 0 && commonStyles.textGreen]} >
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
