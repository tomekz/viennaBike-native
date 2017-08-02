import React, { Component } from 'react';
import { MapView } from 'expo';

class Marker extends React.Component {
  constructor(){
    super()
    this.marker = null
  }

  render () {
    return (
      <MapView.Marker {...this.props} ref={ref => {this.marker = ref}} />
    )
  }

  componentDidMount() {
    this.updateCallout()
  }

  updateCallout () {
    if (this.props.calloutVisible) {
      this.marker.showCallout()
    } else {
      this.marker.hideCallout()
    }
  }
}

export default Marker
