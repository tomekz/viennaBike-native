import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

import { Header } from '.././components'

const stations = [
  {id: 0, text: 'Station 1', distance: '300m', desc : 'Ecke Lichtenfelsgasse U2 Station Rathaus'},
  {id: 1, text: 'Station 2', distance: '300m', desc : 'Ecke Lichtenfelsgasse U2 Station Rathaus'},
  {id: 2, text: 'Station 3', distance: '300m', desc : 'Ecke Lichtenfelsgasse U2 Station Rathaus'},
  {id: 3, text: 'Station 4', distance: '300m', desc : 'Ecke Lichtenfelsgasse U2 Station Rathaus'},
  {id: 4, text: 'Station 5', distance: '300m', desc : 'Ecke Lichtenfelsgasse U2 Station Rathaus'},
]

const rowHasChanged = (r1, r2) => r1.id !== r2.id

const ds = new ListView.DataSource({rowHasChanged})


class NearMeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Near me',
     drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-locate"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };
  state = {
    dataSource: ds.cloneWithRows(stations)
  }

  renderListItem = (data) => {
    return (
      <Card
        title={data.text}>
        <Text style={{fontWeight: 'bold', marginBottom: 5}}>
          {data.distance}
        </Text>
        <Text style={{fontSize: 12}}>
          {data.desc}
        </Text>
      </Card>
    )
  }

  render() {
    return (
      <View>
        <Header title = "Near me" navigation={this.props.navigation}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderListItem}
        />
      </View>
    );
  }
}

export default NearMeScreen;
