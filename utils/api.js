import { AsyncStorage } from "react-native";

export async function fetchDecks () {
  const keys = await AsyncStorage.getAllKeys();
  const result = await AsyncStorage.multiGet(keys);

  return result.map(req => JSON.parse(req[1]))
}

export async function fetchDeck (deck) {
  const item = await AsyncStorage.getItem(deck)

  return JSON.parse(item)
}

export async function createDeck (deck_name) {
  AsyncStorage.mergeItem(deck_name, JSON.stringify({name: deck_name, cards: []}))
  const item = await AsyncStorage.getItem(deck_name)

  return item
}

export async function addCard (deck_name, card) {
  const newCard = await AsyncStorage.getItem(deck_name)
    .then((result) => {
      const data = JSON.parse(result)
      data.cards.push(card)

      return AsyncStorage.setItem(deck_name, JSON.stringify(data))
    })
  const item = await AsyncStorage.getItem(deck_name)

  return JSON.parse(item)
}

export function removeDeck ({ deck_id }) {
  return AsyncStorage.removeItem(deck_id)
  // return AsyncStorage.getItem(deck_id)
    // .then((results) => {
    //   const data = JSON.parse(results)
    //   // data = undefined
    //   delete data
    //   AsyncStorage.removeItem(deck_id)
    // })
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}