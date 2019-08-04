import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
//Import rootSagas and createMiddleware function
import rootSagas from './rootSagas';
import createSagaMiddleware from 'redux-saga';

// Import reducers
// import User from './user/reducer';
// import repo from './repo/reducer';
import userSearch from './userSearch/reducer';

const rootReducers = combineReducers({userSearch});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Trying to use redux extension


let store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)) //using redux compose so we can use both applyMiddleware and devtools extension
);

sagaMiddleware.run(rootSagas);

export default store;
