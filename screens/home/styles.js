import {StyleSheet} from 'react-native';
import colors from '../../variants/colors';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#242526',
    justifyContent: 'space-between',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  txt: {
    color: colors.textButton,
  },
  textButton: {
    color: colors.textButton,
    fontWeight: '700',
    fontSize: 20,
  },
});

export default styles;
