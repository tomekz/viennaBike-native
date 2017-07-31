import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Header } from '.././components'
import styles from '.././styles/styles'

const rows = [
  {id: 0, text: 'Station 1'},
  {id: 1, text: 'Station 2'},
  {id: 2, text: 'Station 3'},
  {id: 3, text: 'Station 4'},
  {id: 4, text: 'Station 5'},
]

const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({rowHasChanged})

class StationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Stations',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-bicycle"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };
  state = {
    dataSource: ds.cloneWithRows(rows)
  }

  renderRow = (rowData) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  render() {
    return (
    <View style={styles.container}>
      <Header title = "Stations"/>
      <ListView
        style={styles.stationsList}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    </View>
    );
  }
}


export default StationsScreen;
