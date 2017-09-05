import React, { Component } from 'react';
import GeolocationProvider from '.././lib/GeolocationProvider'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/DirectionsToolbar'
import { cWhite }  from '../styles/styles'

class DirectionsToolbar extends Component {

  constructor(props){
    super()
    this.state = {
      show: false,
      source: null,
      destination: null
    }
  }

  async show(destination){
    try{
      const position = await new GeolocationProvider().getPosition()
      const source = { latitude: position.coords.latitude, longitude: position.coords.longitude}
      this.setState({show: true, source: source, destination: destination})
    }
    catch(err){
      this.setState({show: false})
    }
  }

  hide(){
    this.setState({show: false})
  }

  getParameterString = (params) => {
    return params
      .map(({ key, value }) => {
        const encodedKey = encodeURIComponent(key)
        const encodedValue = encodeURIComponent(value)

        return `${encodedKey}=${encodedValue}`
      })
      .join('&')
  }

  getDirections = () => {
    const params = []
    const { source, destination } = this.state

    params.push({
      key: 'saddr',
      value: `${source.latitude},${source.longitude}`
    })

    params.push({
      key: 'daddr',
      value: `${destination.latitude},${destination.longitude}`
    })

    const url = `http://maps.google.com/maps?${this.getParameterString(params)}`

    return Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        return Promise.reject(new Error(`Could not open the url: ${url}`))
      } else {
        return Linking.openURL(url)
      }
    })
  }

  render(){
    if (this.state.show){
      return(
          <TouchableOpacity
          style={styles.container}
          onPress={this.getDirections.bind(this)}
          >
            <Text style = {styles.text}>
              Get directions
            </Text>
            <Icon
              name="directions"
              size={30}
              color={cWhite}
            />
          </TouchableOpacity>
      )
    }
    return null;
  }
}

export default DirectionsToolbar;
