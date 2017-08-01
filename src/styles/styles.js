import { StyleSheet } from 'react-native'

const lightGrey = '#808080'
const red = '#FF0000'

export default styles = StyleSheet.create({
  //common
  textLightGrey: {
    fontSize: 12,
    color: lightGrey
  },

  textRed: {
    color: red
  },

  //component specific to be extracted to seperate files
  container: {
    flex: 1
  }
})
