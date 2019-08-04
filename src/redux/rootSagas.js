/* Effects */
import { all, call } from 'redux-saga/effects';
// import { repoSagas } from './repo/saga';
// import { userSagas } from './user/saga';
import { userSearchSagas } from './userSearch/saga';

export default function* rootSagas() {
  // here we initialize all the sagas from different files
  yield all([call(userSearchSagas)]);
}
