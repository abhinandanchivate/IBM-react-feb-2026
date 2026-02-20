import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // internally ReactDOM i.e. virtual dom is used to create the root element and render the app component into it ==> html page react will add its hooking point to the html dom and will render the app component into it
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/";
// Router : will load / provide the routing context / support to manage the complete routing of an application.
// integration of store with the react application. ---> who will take this responsibility ? --> since in react , everything is component --> a component must take care for this integaration --> Provider component --> react-redux integration lib.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
);
