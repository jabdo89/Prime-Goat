import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ReduxWrapper from "./redux";

ReactDOM.render(
  <ReduxWrapper>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ReduxWrapper>,
  document.getElementById("root")
);
