import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import "modern-normalize";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={ persistor }></PersistGate>
      <App />
    </Provider>
  </React.StrictMode>,
)