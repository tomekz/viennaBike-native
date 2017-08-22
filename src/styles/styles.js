import { StyleSheet } from 'react-native'

const lightGrey = '#808080'
const red = '#FF0000'

export default styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
    margin: 1
  },
  textLightGrey: {
    fontSize: 12,
    color: lightGrey
  },
  textRed: {
    color: red
  },
  container: {
    flex: 1,
    //marginBottom: 10,

  },
  errorContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage:{
    fontSize: 16,
    margin: 20
  }
})
