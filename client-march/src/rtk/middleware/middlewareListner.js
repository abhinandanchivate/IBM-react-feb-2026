import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  loginUserAction,
  registerUserAction,
} from "../../features/auth/rtk/auth.action";

export const listnerMiddleware = createListenerMiddleware();

export const setUpListner = (navigate) => {
  listnerMiddleware.startListening({
    matcher: isAnyOf(registerUserAction.fulfilled, loginUserAction.fulfilled), // we will consider the extra reducer / reducer flags / cases
    effect: async (action, listenerApi) => {
      navigate("/dashboard");
    },
  });
};
// navigate : hook /

// how to activate this .
