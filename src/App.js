import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootNavigation} from './Navigation';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});
