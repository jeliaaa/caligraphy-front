import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import i18n from "./i18n.ts"; // Your i18n instance for language management
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const RootComponent = () => {
  return (
    <BrowserRouter basename={`/${i18n.language}`}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
