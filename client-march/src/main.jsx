import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./rtk/store.js";
// we must integrate our redux store with our application in main.jsx to handle that integartion
// we must use the element called Provider ==> react-redux

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}></Provider>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);

// VDOM : will sync up the real DOM with VDOM content followed by react component's rendering content.
// entry point of the react .
// browserrouter : this will help us to add the routing capability to our application.
// who is holding ur Application level details : App.jsx
// browser router i.e. router will be used to wrap the complete application i.e. App element.
