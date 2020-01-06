import { AsyncStorage } from "react-native";
// import { CALENDAR_STORAGE_KEY, formatCalendarResults } from "./_calendar";

export function fetchDecks () {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

export function createDeck ({ deck }) {

}

export function addCard ({ deck, card }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry,
  }))
}

export function removeDeck ({ deck_id }) {
  return AsyncStorage.getItem(deck_id)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(deck_id, JSON.stringify(data))
    })
}