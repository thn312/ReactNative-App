import {StyleSheet} from 'react-native';
import colors from '../../variants/colors';

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
  },
  textInput: {
    borderColor: colors.black,
    borderRadius: 15,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    marginTop: 15,
    borderWidth: 0.2,
    padding: 20,
  },
  containerButton: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
  button: {
    height: 65,
    borderRadius: 35,
    backgroundColor: colors.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: colors.textButton,
    fontSize: 20,
  },
  txt: {
    textAlign: 'center',
    // backgroundColor: 'black'
  },
  image: {
    width: '80%',
    height: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    opacity: 0.9,
    resizeMode: 'contain',
  }
});

export default styles;
