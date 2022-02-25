import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import loginReducer from '../_reducers/loginReducer';

const middleware = [];

const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composerEnhancers(applyMiddleware(...middleware));

const rootReducers = combineReducers({
  loginReducer,
});
export const store = createStore(rootReducers, enhancer);
