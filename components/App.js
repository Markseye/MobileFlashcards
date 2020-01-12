import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Platform } from 'react-native';
import AddDeck from "./AddDeck";
import DeckList from "./DeckList";
import { fetchDecks } from "../utils/api";
import { TabNavigator, StackNavigator } from "react-navigation"
import { purple, white } from "../utils/colors";
import { FontAwesome, Ionicons } from '@expo/vector-icons'





export default class App extends Component {
  // const [decks, setDecks] = useState([])
  // let fetchedDecks;
  // fetchDecks().then(response => {
  //   fetchedDecks = response;
  // });
  state = {
    decks: []
  }

  // console.log("DECKS:", decks)

  handleDeckCreate(deck) {
    this.setState((prevState) => {
      return {
        decks: [ ...prevState["decks"], deck]
      }
    });
  }

  componentDidMount() {
    // console.log("DEcks ",this.state.decks)
    fetchDecks()
      .then((decks) => {
        const deckNames = decks.map((deck) => deck[0])
        this.setState({decks: deckNames});
      })
  }

  // useEffect(() => {
  //   fetchDecks()
  //     .then((decks) => {
  //       setDecks(decks);
  //     })
  // }, [])



  render () {
    return (
      <View style={styles.container}>
        <DeckList decks={this.state.decks}/>
        <AddDeck onAdd={(deck) => this.handleDeckCreate(deck)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
