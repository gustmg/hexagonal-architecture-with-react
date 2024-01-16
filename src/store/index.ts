import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import snackbarSlice from "./snackbarSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    snackbar: snackbarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
