import { StyleSheet } from 'react-native'
import { cPrimaryGreen, cWhite } from '../../styles/styles'
import commonStyles from '../../styles/styles'

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cPrimaryGreen,
  },
  headerIcon: {
    flex: 1,
    marginLeft: 15
  },

  headerTitle: StyleSheet.flatten([
    commonStyles.textBold,
    {
      color: cWhite,
      flex: 5,
      fontSize: 18
    }
  ])

});

export default styles;
