import { SnackbarProvider, enqueueSnackbar } from "notistack";

const showSnackBar = (variant, message) => {
  enqueueSnackbar(message, {
    variant,
    autoHideDuration: 4000,
    anchorOrigin: { vertical: "top", horizontal: "right" },
  });
};

export { SnackbarProvider, showSnackBar };
