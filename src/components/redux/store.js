import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import datosUser from './reducer/userReducer';

const middleware = [];
const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composerEnhancers(applyMiddleware(...middleware));
const rootReducers = combineReducers({
  datosUser,
});
export const store = createStore(rootReducers, enhancer);
