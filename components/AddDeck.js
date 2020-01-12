import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { createDeck } from "../utils/api";
import { purple, white } from "../utils/colors";

export default function AddDeck(props) {
  const [name, onChangeName] = React.useState("");

  // do we need state or can we just use the event?
  const onNameSubmit = () => {
    createDeck(name)
      .then(props.onAdd(name))
    onChangeName("")
  }

  return (
    <View>
      <Text>Deck Name:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeName(text)}
        value={name} />
      <TouchableOpacity style={styles.submitBtn} disabled={name.length == 0} onPress={() => onNameSubmit()}>
        <Text style={styles.submitBtnText}>Add Deck</Text>
      </TouchableOpacity>
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
  submitBtn: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: purple,
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})