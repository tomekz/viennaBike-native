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

  render(){
    const { stations } = this.props
    return (
      <ListView
        contentContainerStyle={styles.stationsList}
        dataSource={ds.cloneWithRows(stations)}
        renderRow={(data) =>
          <View style={styles.stationCardContainer}>
            <StationCard station={data} />
          </View>
        }
      />
    );
  }
}

export default StationsList;
