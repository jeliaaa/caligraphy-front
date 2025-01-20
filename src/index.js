import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import i18n from "./i18n.ts";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ModalContext from "./context/ModalContext.tsx";

const RootComponent = () => {
  return (
    <BrowserRouter basename={`/${i18n.language}`}>
      <Provider store={store}>
        <ModalContext/>
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
