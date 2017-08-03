import { StyleSheet } from 'react-native'

const lightGrey = '#808080'
const colorWhite = '#fff'

export default styles = StyleSheet.create({
  card: {
    width: 165,
    height: 127
  },
  cardTop: {
    flexDirection: 'row',
    margin: 6
  },
  cardTopContent: {
    marginLeft: 5,
    flex: 6,
    alignItems: 'flex-start',
  },
  cardAvatar: {
    flex: 2,
    alignItems: 'center',
  },
  cardBottom: {
    alignItems: 'center',
    margin: 5
  }
})
