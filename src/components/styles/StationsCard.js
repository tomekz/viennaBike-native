import { StyleSheet } from 'react-native'

const lightGrey = '#808080'

export default styles = StyleSheet.create({
  stationsListItem: {
    borderRadius: 3,
    borderWidth: 0.4,
    borderColor: lightGrey,
    marginTop: 10,
    width: 170,
    height: 125
  },
  stationsListItemTop: {
    flexDirection: 'row',
    margin: 10
  },
  stationListItemAvatar: {
    flex: 2,
    alignItems: 'center',
  },
  stationListItemTopContent: {
    marginLeft: 5,
    flex: 6,
    alignItems: 'flex-start',
  },
  stationsListItemBottom: {
    alignItems: 'center',
    margin: 5
  },
  stationListItemInfo: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 1
  }
})
