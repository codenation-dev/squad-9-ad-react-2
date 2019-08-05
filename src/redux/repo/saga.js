import { put, takeLatest, all } from "redux-saga/effects";
import {
  loadDataSuccessRepos,
  loadDataFailureRepos
} from "../../actions/repoActions";

import { LOAD_DATA_REQUEST_REPOS } from "./types";
import axios from "axios";

function* getRepositorios({language, page}) {
  try {
    const dados = yield axios.get(
      `https://api.github.com/search/repositories?q=${language}&page=${page}`
    );
    console.log(language)
    yield put(loadDataSuccessRepos([dados.data]));
  } catch (error) {
    yield put(loadDataFailureRepos(error.response));
  }
}

function* actionWatcher() {
  yield takeLatest(LOAD_DATA_REQUEST_REPOS, getRepositorios);
}

export function* repoSagas() {
  yield all([actionWatcher()]);
}
