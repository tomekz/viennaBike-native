import React from 'react';
import { Text, View } from 'react-native';
import styles  from '.././styles/styles'

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

export default Header;
