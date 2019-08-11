const INITIAL_STATE = JSON.parse(localStorage.getItem('userBase')) || [];

const userBase = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state]
        .filter(user => user.login !== action.payload.login)
        .concat(action.payload);

    case 'REMOVE_USER': {
      localStorage.removeItem('userBase');
      return [];
    }

    default:
      return state;
  }
};

export default userBase;
