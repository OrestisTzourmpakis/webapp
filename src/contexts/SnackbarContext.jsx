import { makeStyles, Snackbar } from "@material-ui/core";
import React, { createContext, useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function useSnackbar() {
  const [config, setConfig] = useState({
    open: false,
    message: "",
    error: false,
  });

  const openSnackbar = (message, error = false) => {
    setConfig({ ...config, error, open: true, message });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setConfig({ ...config, open: false, message: "" });
  };
  return {
    config,
    openSnackbar,
    handleClose,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: "10px",
    },
  },
}));

export const SnackbarContext = createContext();
export function SnackbarContextProvider(props) {
  const config = useSnackbar();
  return (
    <SnackbarContext.Provider value={{ ...config }}>
      {props.children}
      <Snackbar
        open={config.config.open}
        autoHideDuration={6000}
        onClose={config.handleClose}
      >
        {config.config.error ? (
          <Alert severity="error" onClose={config.handleClose}>
            <AlertTitle>Error</AlertTitle>
            <strong>{config.config.message}</strong>
          </Alert>
        ) : (
          <Alert onClose={config.handleClose} severity="success">
            {config.config.message}
          </Alert>
        )}
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
