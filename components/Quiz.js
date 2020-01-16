import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { purple, white } from "../utils/colors";

export default function Quiz(props) {
  const cards = props.navigation.state.params.deck.cards
  const card = cards[0]
  const [displayAnswer, setDisplayAnswer] = useState(false)
  const [opacity] = useState(new Animated.Value(0))
  const [fontSize] = useState(new Animated.Value(0))

  const onSubmit = (correct) => {
    setDisplayAnswer(false)
    const correctCount = correct == true
      ? props.navigation.state.params.correctCount + 1
      : ( props.navigation.state.params.correctCount || 0 )
    
    if(cards.length === 1) {
      props.navigation.navigate('QuizResults', { correctCount: correctCount,
                                                 deck: props.navigation.state.params.deck,
                                                 totalCount: props.navigation.state.params.totalCards })
    } else {
      cards.shift()
      props.navigation.navigate('Quiz', { correctCount: correctCount, cards: cards })
    }
  }

  const handleDisplayAnswer = () => {
    setDisplayAnswer(true)
    Animated.timing(opacity, { toValue: 1, duration: 1000 })
      .start()
    Animated.spring(fontSize, { toValue: styles.titleText.fontSize, speed: 5 })
      .start()
  }

  return(
    <View style={styles.container}>
      <Text style={styles.questionText}>{card.question}</Text>
      { displayAnswer === false
        ? <TouchableOpacity style={styles.submitBtn} onPress={() => handleDisplayAnswer()}>
            <Text style={styles.submitBtnText}>Show Answer</Text>
          </TouchableOpacity>
        : <Animated.Text style={{...styles.titleText, opacity, fontSize}}>{card.answer}</Animated.Text>
      }
      <Text>Was Your Answer Correct?</Text>
      <TouchableOpacity style={styles.submitBtn} onPress={() => onSubmit(true)}>
        <Text style={styles.submitBtnText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitBtn} onPress={() => onSubmit(false)}>
        <Text style={styles.submitBtnText}>No</Text>
      </TouchableOpacity>
      <Text style={styles.questionText}>Questions Remaining {cards.length - 1}</Text>
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
  questionText: {
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
  titleText: {
    color: purple,
    fontSize: 30,
    textAlign: 'center',
    top: 0,
    margin: 20,
    padding: 10,
  },
})