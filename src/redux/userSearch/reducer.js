const userBase = localStorage.getItem('userBase');

const INITIAL_STATE = {
  data: [],
  userBase: userBase ? JSON.parse(userBase) : null,
  isFetching: false,
  error: false
};

const userSearch = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOAD_DATA_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    };
  }
  if (action.type === 'LOAD_DATA_SUCCESS') {
    return {
      isFetching: false,
      data: action.data,
      error: false
    };
  }
  if (action.type === 'LOAD_DATA_FAILURE') {
    return {
      isFetching: false,
      data: [],
      error: true,
      status: action.data.status
    };
  }
  if (action.type === 'REMOVE_USER') {
    return {
      ...state,
      data: []
    };
  }
  return state;
};

export default userSearch;
