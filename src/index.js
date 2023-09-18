// import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { VisitorUidProvider } from "./contexts/VisitorContext";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <Provider store={store}>
      <VisitorUidProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </VisitorUidProvider>
    </Provider>
  </BrowserRouter>

  // </React.StrictMode>
);
