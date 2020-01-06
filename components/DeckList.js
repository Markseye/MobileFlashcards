import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DeckList extends Component {
  return (
    <View style={styles.container}>
      <Text>Open this App.js to start working on your app!</Text>
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

export default connect()(DeckList)