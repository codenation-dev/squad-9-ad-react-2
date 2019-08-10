import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
//Import rootSagas and createMiddleware function
import rootSagas from './rootSagas';
import createSagaMiddleware from 'redux-saga';
import getUserRepos from './userRepos/reducer';
// Import reducers
import repo from './repo/reducer';
import userSearch from './userSearch/reducer';
import userBase from './userBase/reducer';

const rootReducers = combineReducers({
  userSearch,
  getUserRepos,
  repo,
  userBase
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Trying to use redux extension

let store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)) //using redux compose so we can use both applyMiddleware and devtools extension
);

sagaMiddleware.run(rootSagas);

export default store;
