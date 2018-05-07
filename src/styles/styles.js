import { StyleSheet } from 'react-native'

const cLightGrey = '#808080'
const cRed = '#FF0000'
const cGreen = '#58b34c'
export const cPrimaryGreen = '#76C2AF'
export const cWhite = '#ffffff'
export const cBlack = '#000000'


export default styles = StyleSheet.create({
  textBold: {
    margin: 1,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  textRegular: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  textLightGrey: {
    fontSize: 12,
    color: cLightGrey,
    fontFamily: 'Montserrat-Regular',
  },
  textRed: {
    color: cRed,
    fontFamily: 'Montserrat-Regular'
  },
  textGreen: {
    color: cGreen,
    fontFamily: 'Montserrat-Regular'
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
    fontFamily: 'Montserrat-Regular'
  }
})
