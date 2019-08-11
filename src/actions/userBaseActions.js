export const addUser = object => {
  return {
    type: 'ADD_USER',
    payload: object
  };
};

export const removeUsers = () => {
  return {
    type: 'REMOVE_USER'
  };
};

export const changeSearchWord = string => {
  return {
    type: 'CHANGE_SEARCH_WORD',
    payload: string
  };
};
