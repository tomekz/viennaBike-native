import React, {Component} from 'react';
import { View, ListView, Text } from 'react-native'
import StationCard from './StationCard'
import styles from './styles/StationsList'

const rowHasChanged = (r1, r2) => {
  let x = r1 !== r2
  return x
}
const ds = new ListView.DataSource({rowHasChanged});

class StationsList extends Component {

  onPressCard(station){
    this.props.navigation.navigate('Plan', {selectedStation: station})
  }

  render(){
    const { stations } = this.props
    return (
      <ListView
        contentContainerStyle={styles.stationsList}
        dataSource={ds.cloneWithRows(stations)}
        renderRow={(data) =>
          <View style={styles.stationCardContainer}>
            <StationCard station={data} onPressCard={this.onPressCard.bind(this)} favorite={this.props.favStations.indexOf(data.extra.uid) != -1}/>
          </View>
        }
      />
    );
  }
}

export default StationsList;
