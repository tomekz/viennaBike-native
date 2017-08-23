import { StyleSheet } from 'react-native'
import { colorPrimaryGreen, colorWhite } from '../../styles/styles'
import commonStyles from '../../styles/styles'

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorPrimaryGreen,
  },
  headerIcon: {
    flex: 1,
    marginLeft: 15
  },

  headerTitle: StyleSheet.flatten([
    commonStyles.textBold,
    {
      color: colorWhite,
      flex: 5,
      fontSize: 18
    }
  ])

});

export default styles;
