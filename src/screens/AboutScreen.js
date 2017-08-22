import React, { Component } from 'react';
import { View, ListView, Text , Linking} from 'react-native'
import { List, ListItem , Avatar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


class AboutScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'About',
     drawerIcon: ({ tintColor }) => (
      <Ionicons
        name="md-information-circle"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View>
        <List>
          <ListItem
            avatar ={
              <Avatar
                rounded
                source={require('../img/author_avatar.png')}
              />}
            key={1}
            title={'Tomasz Zadrozny'}
            subtitle={'Author'}
            onPress={() => Linking.openURL('https://github.com/tomekz')}
          />
          <ListItem
            avatar = {<Avatar
                rounded
                source={require('../img/github_avatar.jpg')}
              />}
            title={'source'}
            subtitle={'https://github.com/tomekz/viennaBike-native'}
            onPress={() => Linking.openURL('https://github.com/tomekz/viennaBike-native')}
          />
        </List>
        {/* <Text style={{margin:15}}>Bike logo source: Stadt Wien - data.wien.gv.at</Text> */}
        <Text style={{margin:15}}>Citybike and the GEWISTA Werbegesellschaft m.b.H. are not responsible for the content of this application
          .The author of this application is not affiliated with them in any way </Text>
      </View>
    );
  }
}

export default AboutScreen;
