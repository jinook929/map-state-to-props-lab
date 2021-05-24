import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App'

import manageUsers from './reducers/manageUsers'

// add imports and code
const store = createStore(manageUsers, composeWithDevTools())

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
