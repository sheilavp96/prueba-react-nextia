import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './_store/store';
// import { store } from './components/redux/store';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
