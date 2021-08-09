import {makeObservable, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {DeviceEventEmitter, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

export class Home extends Component {
  title = 'Home';

  constructor(props) {
    super(props);
    // console.warn(this.props.route.params, 'VS', props.route.params);
    makeObservable(this, {
      title: observable,
    });
    // this.store = props.listFriend;
    // console.warn(props.listFriend.listF);
  }

  componentDidMount() {
    // console.warn('home', this.props.route.params);
    this.listener = DeviceEventEmitter.addListener(
      'onFriendChange',
      this.onFriendChange.bind(this),
    );
  }

  componentWillUnmount() {
    if (this.listener) {
      this.listener.remove();
    }
  }

  onFriendChange(data) {
    // console.warn('new data from friends', data);
    this.title = data.data;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const {params} = this.props.route || {};
      const {data} = params || {};
      // console.warn('data', data);
      this.title = data;
    }
  }

  gotoFriends() {
    this.store.data = {name: 'abc', title: 'god'};
    this.props.navigation.navigate('friends', {
      callback: this.onCallback.bind(this),
    });
  }

  onCallback(data) {
    this.title = data;
  }

  makeChange() {
    this.store.title = 'New Home';
  }

  popOut() {
    this.props.navigation.goBack();
  }

  onBack() {
    if (!this.store.sessionKey) {
      this.props.navigation.navigate('login');
    } else {
      this.props.navigation.navigate('chat');
    }
  }

  render() {
    return (
      <View>
        {this.props.listFriend.listF.map((friend, index) => {
          return (
            <View style={styles.item} key={index}>
              <Text style={styles.txt}>{friend.name}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>+</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

export default inject('listFriend')(observer(Home));
