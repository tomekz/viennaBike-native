import { StyleSheet } from 'react-native'

const lightGrey = '#808080'
const red = '#FF0000'
export const colorPrimaryGreen = '#76C2AF'
export const colorWhite = 'white'

export default styles = StyleSheet.create({
  textBold: {
    margin: 1,
    fontFamily: 'montserrat-bold',
  },
  textRegular: {
    fontFamily: 'montserrat',
  },
  textLightGrey: {
    fontSize: 12,
    color: lightGrey,
    fontFamily: 'montserrat',
  },
  textRed: {
    color: red,
    fontFamily: 'montserrat'
  },
  container: {
    flex: 1,
    marginBottom: 10,
  },
  errorContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage:{
    fontSize: 16,
    margin: 20,
    fontFamily: 'montserrat'

  }
})
