import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import snackbarSlice from "./snackbarSlice";
import vehicleSlice from "./vehicleSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    snackbar: snackbarSlice,
    vehicle: vehicleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
