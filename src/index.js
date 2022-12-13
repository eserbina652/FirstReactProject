import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
src/index.js
импортируем стор и Провайдер(деструктуризируя)
оборачиваем компонент апп в провайдер в котором
указываем атрибут стор со значением стор
*/
