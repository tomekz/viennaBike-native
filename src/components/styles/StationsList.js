import { StyleSheet } from 'react-native'

const lightGrey = '#808080'

export default styles = StyleSheet.create({
  stationCardContainer:{
    borderRadius: 3,
    borderWidth: 0.4,
    borderColor: lightGrey,
    marginTop: 7,
  },
  stationsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
})
