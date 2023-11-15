import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import PlayerBar from "./components/playBar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ReactGA from "react-ga";

// YOUR_OWN_TRACKING_ID
ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PayPalScriptProvider
        options={{
          clientId: process.env.REACT_APP_PAYPAL,
          currency: "USD",
        }}
      >
        <App />
      </PayPalScriptProvider>
    </BrowserRouter>
    <PlayerBar />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
