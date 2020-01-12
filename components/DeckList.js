import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { purple } from "../utils/colors";

export default function DeckList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.deckTitleText}>Deck List</Text>
        {props.decks.length === 0
          ? <Text>You currently have no decks</Text>
          : props.decks.map((deck) => {
              return <Text key={deck}>{deck}</Text>
            })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckTitleText: {
    color: purple,
    fontSize: 22,
    textAlign: 'center',
    top: 0,
  }
});

// export default connect()(DeckList)