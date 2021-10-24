import React, {Component} from 'react';
import AppNavigator from '../navigations';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import {store} from '../store';
import {View,Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}
