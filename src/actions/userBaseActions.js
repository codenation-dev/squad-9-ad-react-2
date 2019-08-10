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
