import axios from "axios";
import { LOAD_DATA_REQUEST } from "./types";

import { put, takeLatest, all } from "redux-saga/effects";
import {loadDataFailure, loadDataSuccess} from "../../actions";

function* getUser({ username }) {
  try {
    const dados = yield axios.get(`https://api.github.com/users/${username}`);
    yield put(loadDataSuccess([dados.data]));
  } catch (error) {
    yield put(loadDataFailure(error.response));
  }
}

function* actionWatcher() {
  yield takeLatest(LOAD_DATA_REQUEST, getUser);
}

export function* userSearchSagas() {
  yield all([actionWatcher()]);
}
