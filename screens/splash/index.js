import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import drawables from '../../variants/drawables';
import styles from './styles';
import * as Anim from 'react-native-animatable';

export class Splash extends Component {
  componentDidMount() {
    // console.warn('splash', this.props.route)
    setTimeout(this.onComplete.bind(this), 2000);
  }

  onComplete() {
    this.props.navigation.navigate('login');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.safea} />

        <View style={styles.root}>
          <Image source={{uri: drawables.doge}} style={styles.image} />
          <Text style={styles.expression}>Shiba Inu</Text>
        </View>
      </View>
    );
  }
}

export default Splash;
