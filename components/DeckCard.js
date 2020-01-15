import React, { Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { lightPurp } from "../utils/colors";

export default function DeckCard(props) {

  const handlePress = (() => {
    props.navigation.navigate('DeckDetails', { ...props.deck });
  })

  return(
    <View>
      <TouchableOpacity style={styles.deckCard} onPress={() => handlePress()}>
        <Text style={styles.deckCardText}>{props.deck.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  deckCard: {
    backgroundColor: lightPurp,
    borderRadius: 2,
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  deckCardText: {
    fontSize: 25,
  }
})