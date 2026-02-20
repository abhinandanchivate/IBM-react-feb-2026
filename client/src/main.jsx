import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client"; // internally ReactDOM i.e. virtual dom is used to create the root element and render the app component into it ==> html page react will add its hooking point to the html dom and will render the app component into it
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/";
import { setupListner } from "./redux/middleware/middlewareListner.js";

// do u wnat to call setuplistener only once or everytime ? ==> once is expected --> usd during the application loading time

// Router : will load / provide the routing context / support to manage the complete routing of an application.
// integration of store with the react application. ---> who will take this responsibility ? --> since in react , everything is component --> a component must take care for this integaration --> Provider component --> react-redux integration lib.
function BootstrapListener() {
  const navigate = useNavigate(); // to navigate to some component based on the response from the backend after performing some action like login, register etc.
  useEffect(() => {
    // setup listener middleware with navigate function
    setupListner(navigate); // call ur listnersetup.
  }, [navigate]);
  // 1st time it will be called and it will be ready with the listner. then whenever we will come across with the navigate then it will call the listner.
  // will be called when navigate changes --> when we will navigate to some comps then it will call effect.
} // functional component --> main component is it rendering the content directly via render.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <BootstrapListener /> {/* to setup the listner middleware */}
        <App />
      </Router>
    </Provider>
  </StrictMode>,
);
