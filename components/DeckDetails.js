import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from "react-native";
import { purple, white } from "../utils/colors";
import { fetchDeck } from "../utils/api";

export default function DeckDetails(props) {
  const deck = props.navigation.state.params.deck
  const numberOfCards = props.navigation.state.params.deck.cards.length
  const [cardCount, onChangeCardCount] = useState(numberOfCards)
  const [opacity] = useState(new Animated.Value(0))

  const handleAddCard = (() => {
    props.navigation.navigate('AddCard', { deck: deck });
  })

  const handleStartQuiz = (() => {
    props.navigation.navigate('Quiz', { deck, correctCount: 0, totalCards: numberOfCards })
  })

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 1500 })
      .start()
  }, [])

  useEffect(() => {
    cardCount === numberOfCards ? null : onChangeCardCount(numberOfCards)
  })

  return(
    <Animated.View style={{ ...styles.container, opacity }}>
      <Text style={styles.titleText}>{deck.name}</Text>
      <Text> Number Of Cards {cardCount} </Text>
      { cardCount === 0
        ? <Text style={styles.emptyCardsText}>Add Cards to begin quiz!</Text>
        : <TouchableOpacity disabled={cardCount === 0} style={styles.submitBtn} onPress={() => handleStartQuiz()}>
            <Text style={styles.submitBtnText}>Start Quiz?</Text>
          </TouchableOpacity>
      }
      <TouchableOpacity style={styles.submitBtn} onPress={() => handleAddCard()}>
        <Text style={styles.submitBtnText}>Add Card</Text>
      </TouchableOpacity>
    </Animated.View>
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