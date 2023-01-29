import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/tailwind.css";
import App from "./App";
// import reportWebVitals from '../reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./stores";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = '';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// reportWebVitals();
