/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/splash';
import Friends from './screens/frends';
import {Provider} from 'mobx-react';
import dataStore from './store/dataStore';
import Login from './screens/login';
const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const App = ({}) => {
  return (
    <Provider listFriend={dataStore} xyz={dataStore}>
      <NavigationContainer>
        <Navigator
          initialRouteName="splash"
          headerMode="none"
          screenOptions={{
            ...TransitionPresets.FadeFromBottomAndroid,
          }}>
          <Screen name="splash" component={Splash} />
          <Screen name="login" component={Login} />
          <Screen name="home" component={Home} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// const styles = StyleSheet.create({});

export default App;
