import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button, DeviceEventEmitter, Text, View} from 'react-native';

export class Friends extends Component {
  constructor(props) {
    super(props);
    this.store = props.abc;
  }

  componentDidMount() {
    // console.warn('data in store', this.props.abc.data);
    // console.warn('friends', this.props.route);
  }

  gotoSplash() {
    this.props.navigation.navigate('home', {data: 'this is from friends'});
  }

  pushHome() {
    this.props.navigation.push('home');
  }

  updateHome() {
    DeviceEventEmitter.emit('onFriendChange', {data: 'from event emitter'});
  }

  updateHomeCallback() {
    const {callback} = this.props.route.params;
    callback && callback('tessst');
  }

  updateHomeStore() {
    const {abc} = this.props;
    this.store.data.name = 'hoho';
    abc.setTitle('new eheiw');
  }

  render() {
    return (
      <View>
        <Text> Friends </Text>
        <Text>{this.store.data.name}</Text>
        <Button
          title={'Make change to store'}
          onPress={this.updateHomeStore.bind(this)}
        />
        <Button
          title={'Fire callback'}
          onPress={this.updateHomeCallback.bind(this)}
        />
        <Button title={'Fire event'} onPress={this.updateHome.bind(this)} />
        <Button title={'Go to home'} onPress={this.gotoSplash.bind(this)} />
        <Button
          title={'Push to create new home'}
          onPress={this.pushHome.bind(this)}
        />
      </View>
    );
  }
}

export default inject('listFriend')(observer(Friends));
