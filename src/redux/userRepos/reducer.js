const INITIAL_STATE = {
  repos: [],
  isFetching: false,
  error: false
};

const getUserRepos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_USER_REPOS':
      return { ...state, isFetching: true };
    case 'LOAD_USER_REPOS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        repos: action.payload,
        error: false
      };
    case 'LOAD_USER_REPOS_FAILURE':
      return {
        ...state,
        repos: [],
        error: true
        //status:
      };
    default:
      return state;
  }
};

export default getUserRepos;
