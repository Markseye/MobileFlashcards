import { AsyncStorage } from "react-native";
// import { CALENDAR_STORAGE_KEY, formatCalendarResults } from "./_calendar";

export async function fetchDecks () {
  const keys = await AsyncStorage.getAllKeys();
  console.log("KEY", keys)
  const result = await AsyncStorage.multiGet(keys);
  // console.log("results", result[keys[0]])result.map(req => req))
  return result

  // return result.map(req => JSON.parse(req));
}

export async function createDeck (deck_name) {
  const merged = await AsyncStorage.mergeItem(deck_name, JSON.stringify({name: deck_name, cards: []}))
  const item = await AsyncStorage.getItem(deck_name)
  return merged
}

export function addCard ({ deck, card }) {
  return AsyncStorage.getItem(deck_name)
    .then((result) => {
      const deck = JSON.parse(result)
      newDeck = { ...data,
               card }
      AsyncStorage.setItem(deck, JSON.stringify(newDeck))
    })

  // return AsyncStorage.mergeItem(deck, JSON.stringify({
  //   ...deck,
  //   [card]: entry
  // }))
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