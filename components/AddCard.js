import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { addCard, generateUID } from "../utils/api";

export default function AddCard(props) {
  const [question, onChangeQuestion] = React.useState('Type Question Here');
  const [answer, onChangeAnswer] = React.useState('Type Answer Here');

  // do we need state or can we just use the event?
  onQuestionSubmit = (event) => {
    card_id = generateUID()
    card = { [card_id]: {
               question,
               answer,
    }}
    // get deck from props
    // addCard({ this.props.deck, card })
    console.log("save state of question here")
  }

  return (
    <View style={styles.container}>
      <Text>Question: </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeQuestion(text)}
        value={question} />
      <Text>Answer: </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeAnswer(text)}
        value={answer} />
      <TouchableOpacity onPress={() => onQuestionSubmit()}>
        <Text>Add Deck</Text>
      </TouchableOpacity>
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