import {StyleSheet} from 'react-native';
import colors from '../../variants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  safea: {
    height: 20,
  },
  root: {
    backgroundColor: colors.background,
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.red,
  },
  text2: {
    color: 'purple',
  },
  box: {
    width: 80,
    height: 50,
    backgroundColor: 'magenta',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 4,
  },
  box2: {
    flex: 1,
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  expression: {
    // fontFamily: ''
    fontSize: 22,
    color: colors.white,
    marginTop: 10,
    zIndex: 100,
  },
});

export default styles;
