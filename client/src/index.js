import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // New import
import { thunk } from 'redux-thunk'; // Corrected: use named import

import { reducers } from './reducers';
import App from './App';
import './index.css';

// Create the Redux store using configureStore
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Get the root element from the DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app wrapped with the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
