import { AsyncStorage } from 'react-native';
import { decks } from './_DATA';

const DECKS_STORAGE_KEY = 'Flashcards:decks';

export function getData() {
  return decks;
}

function formatDeckResults(results) {
  return results === null ? decks : JSON.parse(results);
}

export function getDecksOld() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
}

export async function getDecks() {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (storeResults === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    return storeResults === null ? decks : JSON.parse(storeResults);
  } catch (err) {
    console.log(err);
  }
}

export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return JSON.parse(storeResults)[id];
  } catch (err) {
    console.log(err);
  }
}

export async function saveDeck(title) {
  try {
    await AsyncStorage.mergeItem( DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title,
          questions: []
        }
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function removeDeckAPI(title) {
  try {
    const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const data = JSON.parse(results);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

{/*export function deleteDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    const newData = Object.keys(data).reduce((newObj, key) => {
      if (key !== title) {
        newObj[key] = data[key];
      }
      return newObj;
    }, {});
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newData));
  });
}*/}