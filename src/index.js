import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import worker from './worker';
import { NB_ITEMS } from './constants';

const state = {
  entities: {},
  ui: {
    list: {
      itemsPerChunk: 50,
      itemsCount: NB_ITEMS,
      visibleChunkIndex: 0,
      visibleChunks: []
    }
  }
};

const store = createStore(
  rootReducer, 
  state, 
);

worker.onmessage = e => {
  store.dispatch(e.data.action);
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);