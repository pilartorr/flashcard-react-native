import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD
} from '../actions/index';

import { initialData } from '../utils/_DATA';

const initialState = initialData;

export default function decks(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    case REMOVE_DECK: 
      const { id } = action;
      const newState = Object.assign({}, state)
      newState[id] = undefined
      delete newState[id]
      return newState
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card)
        }
      };
    default:
      return state;
  }
}