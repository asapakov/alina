import React from 'react';
import store from './store/redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './store/language/index';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
