import { StyleSheet } from 'react-native'

const lightGrey = '#808080'

export default styles = StyleSheet.create({
  stationCardContainer:{
    borderRadius: 3,
    borderWidth: 0.4,
    borderColor: lightGrey,
    marginTop: 10,
  },
  stationsList: {
    margin: 3,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
})
