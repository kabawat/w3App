import React from 'react';
import ReactDOM from 'react-dom/client';
import W3Chat from './w3chat';
import './style/style.css'
import { Provider } from 'react-redux';
import store from './redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <W3Chat />
  </Provider>
);