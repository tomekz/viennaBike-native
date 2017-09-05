import { StyleSheet ,Dimensions} from 'react-native'
import { cBlack, cWhite  } from '../../styles/styles'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: 45,
    opacity: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cBlack,
    width: Dimensions.get('window').width
  },
  text: {
    color: cWhite,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;
