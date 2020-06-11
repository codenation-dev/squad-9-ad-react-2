import { LOAD_USER_REPOS, LOAD_USER_REPOS_SUCCESS, LOAD_USER_REPOS_FAILURE } from "./types";

const INITIAL_STATE = {
  repos: [],
  isFetching: false,
  error: false
};

export default function getUserRepos (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { 
        ...state, 
        isFetching: true 
      };
    case LOAD_USER_REPOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        repos: action.payload,
        error: false
      };
    case LOAD_USER_REPOS_FAILURE:
      return {
        ...state,
        repos: [],
        error: true
      };
    default:
      return state;
  }
};