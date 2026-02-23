// we have to create a listner --> will check that the registeraction is called or not if called and if the response is success then it should navigate to dashboard.

import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  loginUserAction,
  registerUserAction,
} from "../../auth/redux/actions/auth.action";
import { loginUser } from "../../auth/service/auth.service";

export const listnerMiddleware = createListenerMiddleware();
export const setupListner = (navigate) => {
  listnerMiddleware.startListening({
    matcher: isAnyOf(registerUserAction.fulfilled, loginUserAction.fulfilled),
    effect: async (action, listenerApi) => {
      navigate("/dashboard");
    },
  }); // u are activating the listner
};
// 1st hook the listner to the store in the store file
// hook the setupListner in the main component
// write the logic for setuplisnter.
