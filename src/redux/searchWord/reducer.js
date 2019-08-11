const INITIAL_STATE = '';

const searchWord = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_WORD':
      return action.payload;
    default:
      return state;
  }
};

export default searchWord;
