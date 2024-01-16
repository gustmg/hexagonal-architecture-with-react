import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { closeSnackbar } from "../../../store/snackbarSlice";

function BaseSnackbar() {
  const snackbar = useSelector((state: RootState) => state.snackbar.snackbar);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={snackbar.isOpen}
      autoHideDuration={3000}
      onClose={() => dispatch(closeSnackbar())}
    >
      <Alert
        onClose={() => dispatch(closeSnackbar())}
        severity={snackbar.type}
        sx={{ width: "100%" }}
      >
        {snackbar.text}
      </Alert>
    </Snackbar>
  );
}

export default BaseSnackbar;
