import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/tailwind.css";
import App from "./App";
// import reportWebVitals from '../reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./stores";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer/>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);

// reportWebVitals();
