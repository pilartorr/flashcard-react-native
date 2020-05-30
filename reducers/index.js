import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK
} from '../actions/index';

export default function decks(state = {}, action) {
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
    case REMOVE_DECK: {
      const { id } = action;
      const decks = Object.keys(state)
      return {
        ...state,
        [id]: decks.filter(deck => deck.id !== action.id)
      }
    }
    default:
      return state;
  }
}
