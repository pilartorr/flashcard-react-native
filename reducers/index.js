import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD
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
    case ADD_CARD:
      const { id, card } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          questions: [...state[id].questions].concat(card)
        }
    }
    default:
      return state;
  }
}
