import React, { Component } from 'react';
import { Header } from '../components'
import { View, ListView, Text , Linking} from 'react-native'
import { List, ListItem , Avatar} from 'react-native-elements'
import Icon  from 'react-native-vector-icons/Ionicons';
import { cBlack } from '.././styles/styles';

class AboutScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="md-information-circle"
        size={24}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <List style={{margin: 0}}>
          <ListItem
            avatar ={
              <Avatar
                rounded
                source={require('../../assets/img/author_avatar.png')}
              />}
            key={1}
            title={'Tomasz Zadrozny'}
            subtitle={'Author'}
            fontFamily='Montserrat-Regular'
            onPress={() => Linking.openURL('https://github.com/tomekz')}
          />
          <ListItem
            avatar = {<Avatar
                rounded
                source={require('../../assets/img/github_avatar.jpg')}
              />}
            title={'source'}
            fontFamily='Montserrat-Regular'
            subtitle={'https://github.com/tomekz/viennaBike-native'}
            onPress={() => Linking.openURL('https://github.com/tomekz/viennaBike-native')}
          />
        </List>
        <Text style={{margin:15, fontFamily: 'Montserrat-Regular', color: cBlack}}>Citybike Wien and the GEWISTA Werbegesellschaft m.b.H. are not responsible for the content of this application
          .The author of this application is not affiliated with them in any way </Text>
      </View>
    );
  }
}

export default AboutScreen;
