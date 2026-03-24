// ur entire store details we will write here.
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/rtk/authSlice";
import { listnerMiddleware } from "./middleware/middlewareListner";
const store = configureStore({
  reducer: { authReducer }, // global reducer / combined reducer.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listnerMiddleware.middleware),
});
// reducers : we will divide our entire application module wise : have we done that ?
// for every module we will have thier own reducer details ===> all reducers will form a store .

// middleware
// cross cutting concerns : managing global navigation etc.
export default store;
