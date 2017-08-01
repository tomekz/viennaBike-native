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
    return (
      <ListView
        contentContainerStyle={styles.stationsList}
        dataSource={ds.cloneWithRows(this.props.stations)}
        renderRow={(data) => <StationCard station={data} />}
      />
    );
  }
}

export default StationsList;
