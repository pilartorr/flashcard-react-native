
import { AsyncStorage } from "react-native";

//getDecks will get us the decks[DONE]
//getDeck will give us all the info of that deck [Done]
//saveDeck will save a new deck [DONE]
//addCardToDeck will save the {question, answer} to that deck title

const DECK_STORAGE_KEY = "Flashcards:decks";

export function getDecksData() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    return JSON.parse(results);
  });
}

