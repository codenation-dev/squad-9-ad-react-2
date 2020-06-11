import {
  LOAD_DATA_REQUEST_REPOS,
  LOAD_DATA_SUCCESS_REPOS,
  LOAD_DATA_FAILURE_REPOS
} from "./types";

const INITIAL_STATE = {
  data: [{ items: [] }],
  isFetching: false,
  error: false,
  total_count: false,
};

export default function repo (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DATA_REQUEST_REPOS:
      return {
        isFetching: true,
        data: [],
        error: false
      };
    case LOAD_DATA_SUCCESS_REPOS:
      return {
        total_count: state.total_count ? state.total_count : action.data[0].total_count,
        isFetching: false,
        data: action.data,
        error: false
      };
    case LOAD_DATA_FAILURE_REPOS:
      return {
        isFetching: false,
        data: [{ items: [] }],
        error: true,
        status: action.data.status
      };
    default:
      return state
  }
}
