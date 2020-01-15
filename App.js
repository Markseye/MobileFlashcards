import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { purple, white } from "./utils/colors";
import Constants from 'expo-constants';
import Nav from './components/Nav'

function NativeStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NativeStatusBar backgroundColor={purple} barStyle="light-content" />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
