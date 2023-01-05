import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/tailwind.css';
import App from './views/home/App';
// import reportWebVitals from '../reportWebVitals';
import { Provider } from 'react-redux'
import store from "./stores";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

// reportWebVitals();
