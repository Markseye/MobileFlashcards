import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { purple, white } from "../utils/colors";
import { fetchDeck } from "../utils/api";

export default function DeckDetails(props) {
  const deck = props.navigation.state.params
  const numberOfCards = props.navigation.state.params.cards.length
  const [cardCount, onChangeCardCount] = React.useState(numberOfCards)

  const handleAddCard = (() => {
    props.navigation.navigate('AddCard', { ...deck });
  })

  const handleStartQuiz = (() => {
    props.navigation.navigate('Quiz')
  })

  useEffect(() => {
    fetchDeck(deck.name)
      .then((deckString) => {
        const count = JSON.parse(deckString).cards.length
        count === numberOfCards ? null : onChangeCardCount(count)
      })
  })

  return(
    <View style={styles.container}>
      <Text style={styles.titleText}>{deck.name}</Text>
      <Text> Number Of Cards {cardCount} </Text>
      { cardCount === 0
        ? <Text style={styles.emptyCardsText}>Add Cards to begin quiz!</Text>
        : <TouchableOpacity disabled={cardCount === 0} style={styles.submitBtn} onPress={() => handleAddCard()}>
            <Text style={styles.submitBtnText}>Start Quiz?</Text>
          </TouchableOpacity>
      }
      <TouchableOpacity style={styles.submitBtn} onPress={() => handleAddCard()}>
        <Text style={styles.submitBtnText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  emptyCardsText: {
    marginTop: 30,
    color: purple,
    fontSize: 22,
  },
  submitBtn: {
    alignItems: 'center',
    backgroundColor: purple,
    borderRadius: 2,
    height: 45,
    width: 200,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  titleText: {
    color: purple,
    fontSize: 26,
  }
})