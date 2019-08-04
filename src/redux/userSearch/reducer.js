const INITIAL_STATE = {
  data: ["janiomiara"],
  isFetching: false,
  error: false
};

const userSearch = (state = INITIAL_STATE, action) => {
  if (action.type === "LOAD_DATA_REQUEST") {
    return {
      isFetching: true,
      data: [],
      error: false
    };
  }
  if (action.type === "LOAD_DATA_SUCCESS") {
    return {
      isFetching: false,
      data: action.data,
      error: false
    };
  }
  if (action.type === "LOAD_DATA_FAILURE") {
    return {
      isFetching: false,
      data: [],
      error: true,
      status: action.data.status
    };
  }
  return state;
};

export default userSearch;
