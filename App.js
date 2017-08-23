import React from 'react';
import Expo, { AppLoading } from 'expo';
import Navigator from './src/navigation/Navigator'
import { fontAssets } from './src/helpers';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Navigator />
    );
  }
}


Expo.registerRootComponent(App);
