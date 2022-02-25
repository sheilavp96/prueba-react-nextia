import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logOutReducer from '../_reducers/logOutReducer';
import { authReducer } from '../_reducers/authReducer';

// const middleware = [];
const composerEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composerEnhancers(applyMiddleware(thunk));

const rootReducers = combineReducers({
  logOutReducer,

  authReducer,
});
export const store = createStore(rootReducers, enhancer);
