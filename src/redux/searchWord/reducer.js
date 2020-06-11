import { CHANGE_SEARCH_WORD } from "./types";

const INITIAL_STATE = '';

export default function searchWord (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_SEARCH_WORD:
      return action.payload;
    default:
      return state;
  }
};
