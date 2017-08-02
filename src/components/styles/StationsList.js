import { StyleSheet } from 'react-native'

const lightGrey = '#808080'

export default styles = StyleSheet.create({
  stationCardContainer:{
    borderRadius: 3,
    borderWidth: 0.4,
    borderColor: lightGrey,
    margin: 5,
  },
  stationsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
})
