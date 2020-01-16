import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { addCard, generateUID } from "../utils/api";
import { purple, white } from "../utils/colors";

export default function AddCard(props) {
  const [question, onChangeQuestion] = React.useState('Type Question Here');
  const [answer, onChangeAnswer] = React.useState('Type Answer Here');
  const deckName = props.navigation.state.params.deck.name

  const onQuestionSubmit = (event) => {

    const card = { question,
                   answer }
    addCard(deckName, card)
      .then((result) => {
        props.navigation.navigate('DeckDetails', { deck: result });
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.deckTitleText}>Question: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeQuestion(text)}
        value={question} />
      <Text style={styles.deckTitleText}>Answer: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeAnswer(text)}
        value={answer} />
      <TouchableOpacity style={styles.submitBtn} onPress={(e) => onQuestionSubmit()}>
        <Text style={styles.submitBtnText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckTitleText: {
    color: purple,
    fontSize: 22,
    textAlign: 'center',
    top: 0,
    marginTop: 20,
    marginBottom: 10,
  },
  submitBtn: {
    alignItems: 'center',
    backgroundColor: purple,
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    padding: 10,
    width: 200,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 40,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200 
  }
});