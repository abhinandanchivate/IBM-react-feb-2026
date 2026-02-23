// to create the store
// store : configureStore method from @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
// its a one time activity / configuration.
import authReducer from "../../auth/redux/slices";
import profileReducer from "../../profiles/redux/slices";
import { listnerMiddleware } from "../middleware/middlewareListner";

const store = configureStore({
  // reducers.  --> who will store the data --> store , who will help us to manipulate the data in the store --> reducer
  // middleware --> to take care for some side effects --> navigating to some components, toast, loggings etc.
  // cross cutting concerns : are the common functionalites which are required in multiple places in the application. --> to avoid the code duplication we can use the middleware to take care for these cross cutting concerns.--> maintanability and reusability of the code.
  reducer: { auth: authReducer, profile: profileReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listnerMiddleware.middleware),
});

export default store;
