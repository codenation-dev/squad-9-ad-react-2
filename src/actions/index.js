export const loadDataRequest = username => {
  return {
    type: 'LOAD_DATA_REQUEST',
    username
  };
};

export const loadDataSuccess = data => {
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  };
};

export const loadDataFailure = data => {
  return {
    type: 'LOAD_DATA_FAILURE',
    data
  };
};

export const loadDataRequestRepos = (language, query) => {
  return {
    type: 'LOAD_DATA_REQUEST_REPOS',
    language,
    query
  };
};

export const loadDataSuccessRepos = data => {
  return {
    type: 'LOAD_DATA_SUCCESS_REPOS',
    data
  };
};

export const loadDataFailureRepos = data => {
  return {
    type: 'LOAD_DATA_FAILURE_REPOS',
    data
  };
};
