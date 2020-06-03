import { AsyncStorage } from 'react-native';
//import { decks } from './_DATA';

const DECKS_STORAGE_KEY = 'Flashcards:decks';

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

export async function saveDeckAPI(title) {
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

export async function removeDeckAPI (key) {
  try {
    await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
  } catch (err) {
    console.log(err);
  }
}

export async function addCardAPI(deckId, card) {
  try {
    //const deck = await getDeck(deckId);

    await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results);
      Object.keys(data).map(id => {
        if (id === deckId) {
          data[id].questions.push(card);
        }
      });
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
  } catch (err) {
    console.log(err);
  }
}

