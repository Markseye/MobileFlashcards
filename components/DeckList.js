import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { purple } from "../utils/colors";
import { fetchDecks } from "../utils/api";
import DeckCard from "./DeckCard";

export default function DeckList(props) {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    fetchDecks()
      .then((deckList) => {
        const deckNames = deckList.map((deck) => deck.name)
        const currentDeckNames = decks.map((deck) => deck.name)
        sameDecks(deckNames, currentDeckNames) ? null : setDecks(deckList)
      })
  })

  const sameDecks = ((decks, decks1) => {
    if(decks.length !== decks1.length) {
      return false
    }

    let deckArray = decks.map((deck, i) => (
      deck == decks1[i]
    ))

    const set = new Set(deckArray)
    return set.size === 1
  }) 

    return (
      <View style={styles.container}>
        <Text style={styles.deckTitleText}>Deck List</Text>
          {decks.length === 0
            ? <Text>You currently have no decks</Text>
            : <ScrollView style={{ width:250, marginLeft: 30}} centerContent='true'>
                {decks.map((deck) => {
                  return <DeckCard navigation={props.navigation} key={deck.name} deck={deck}>{deck}</DeckCard>
                })}
              </ScrollView>
          }
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckTitleText: {
    color: purple,
    fontSize: 22,
    textAlign: 'center',
    top: 0,
    marginBottom: 20,
  }
});