import { createSlice } from "@reduxjs/toolkit";

const defaultSnackbar = {
  type: "info" as "error" | "success" | "info",
  text: "",
  isOpen: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",

  initialState: {
    snackbar: defaultSnackbar,
  },

  reducers: {
    openSnackbar: (state, action) => {
      state.snackbar.isOpen = true;
      state.snackbar.type = action.payload.type;
      state.snackbar.text = action.payload.text;
    },

    closeSnackbar: (state) => {
      state.snackbar = { ...defaultSnackbar };
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
