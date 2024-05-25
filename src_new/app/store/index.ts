import { configureStore } from "@reduxjs/toolkit";
import { reducer as dialogReducer } from "../../entities/Dialog/model";

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
  },
});
