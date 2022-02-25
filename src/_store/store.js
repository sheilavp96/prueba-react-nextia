import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import loginReducer from '../_reducers/loginReducer';
import logOutReducer from '../_reducers/logOutReducer';

const middleware = [];

const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composerEnhancers(applyMiddleware(...middleware));

const rootReducers = combineReducers({
  loginReducer,
  logOutReducer,
});
export const store = createStore(rootReducers, enhancer);
