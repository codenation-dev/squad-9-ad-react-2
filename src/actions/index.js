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

// ---

export const loadUserRepos = string => {
  return {
    type: 'LOAD_USER_REPOS',
    payload: string
  };
};

export const loadUserReposSuccess = data => {
  return {
    type: 'LOAD_USER_REPOS_SUCCESS',
    payload: data
  };
};

export const loadUserReposFailure = data => {
  return {
    type: 'LOAD_DATA_FAILURE_REPOS',
    data
  };
};
