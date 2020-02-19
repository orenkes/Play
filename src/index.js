import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { GlobalProvider } from "./state/GlobalState";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  rootElement
);
