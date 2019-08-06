export const loadDataRequestRepos = (language, page) => {
  return {
    type: "LOAD_DATA_REQUEST_REPOS",
    language,
    page,
    
  };
};

export const loadDataSuccessRepos = (data) => {
  return {
    type: "LOAD_DATA_SUCCESS_REPOS",
    data
  };
};

export const loadDataFailureRepos = data => {
  return {
    type: "LOAD_DATA_FAILURE_REPOS",
    data
  };
};
