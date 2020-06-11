import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, REMOVE_USER } from "./types";

const userBase = localStorage.getItem('userBase');

const INITIAL_STATE = {
  data: [],
  userBase: userBase ? JSON.parse(userBase) : null,
  isFetching: false,
  error: false
};

export default function userSearch (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return {
        isFetching: true,
        data: [],
        error: false
      };
    case LOAD_DATA_SUCCESS:
      return {
        isFetching: false,
        data: action.data,
        error: false
      };
    case LOAD_DATA_FAILURE:
      return {
        isFetching: false,
        data: [],
        error: true,
        status: action.data.status
      };
    case REMOVE_USER:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
};
