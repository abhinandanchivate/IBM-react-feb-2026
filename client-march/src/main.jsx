import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import store from "./rtk/store.js";
import { setUpListner } from "./rtk/middleware/middlewareListner.js";
// we must integrate our redux store with our application in main.jsx to handle that integartion
// we must use the element called Provider ==> react-redux
const BootstrapListner = () => {
  // life cycle hook called useEffect
  // will have 3 formats
  const navigate = useNavigate();
  useEffect(() => {
    setUpListner(navigate);
  }, [navigate]);
  // setuplistner ==> is it our user defined function.
  // is managing the middleware listner.
  // this useeffect format will be called after component renders.
  // this format is used for side effects ==> api call, event listners, navigation hook etc).
  // [] ==> dependency array ==> useeffect over the 1st render ==>whenever  navigate the get the changes changes
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <BootstrapListner></BootstrapListner>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
);

// VDOM : will sync up the real DOM with VDOM content followed by react component's rendering content.
// entry point of the react .
// browserrouter : this will help us to add the routing capability to our application.
// who is holding ur Application level details : App.jsx
// browser router i.e. router will be used to wrap the complete application i.e. App element.
