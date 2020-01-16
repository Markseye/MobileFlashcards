import React, { useState, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { fetchDeck } from "../utils/api";
import { purple, white } from "../utils/colors";

export default function QuizResults(props) {
  const countCorrect = props.navigation.state.params.correctCount
  const [opacity] = useState(new Animated.Value(0))
  const [fontSize] = useState(new Animated.Value(0))

  const total = props.navigation.state.params.totalCount
  const onPress = (nav) => {
    fetchDeck(props.navigation.state.params.deck.name)
      .then((result) => {
        props.navigation.navigate(nav, {deck: result, correctCount: 0})
      })
  }

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 1500 })
      .start()
    Animated.spring(fontSize, { toValue: styles.scoreText.fontSize, speed: 5 })
      .start()
  })

  return(
    <View style={styles.container}>
      <Text style={styles.titleText}>Your Score</Text>
      <Animated.Text style={{...styles.scoreText, opacity, fontSize}}>{Math.round(countCorrect/total * 100)}%</Animated.Text>
      <TouchableOpacity style={styles.submitBtn} onPress={() => onPress('Quiz')}>
        <Text style={styles.submitBtnText}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitBtn} onPress={() => onPress('DeckDetails')}>
        <Text style={styles.submitBtnText}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

// TODO: move these styles out to styledcomponents
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: purple,
    fontSize: 22,
    textAlign: 'center',
  },
  submitBtn: {
    alignItems: 'center',
    backgroundColor: purple,
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    width: 200,
    margin: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  scoreText: {
    color: purple,
    fontSize: 35,
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
  },
})