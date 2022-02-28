import {
  Box,
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { handleErrors } from "../utils/handleErrors";
import { register } from "../services/userService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    "& .MuiTextField-root": {
      margin: "10px",
      width: "340px",
      maxWwidth: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: "5px",
    },
  },
  paperWrapper: {
    padding: "20px",
    width: "500px",
  },
  errorsList: {
    "& li": {
      color: "red",
      marginTop: "10px",
      listStylePosition: "inside",
      wordWrap: "break-word",
    },
  },
}));

function RegisterForm({ handleClose }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { openSnackbar } = useContext(SnackbarContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password, confirmPassword);
    try {
      setErrors([]);
      // validations!!
      if (password !== confirmPassword)
        throw "Password and Confirm Password must match";
      const result = await register({
        email,
        password,
        userName: username,
      });
      openSnackbar(
        "Registared completed. A verifaction link was sent to your email address.",
        false
      );
      handleClose();
      // register the user!!!
    } catch (ex) {
      handleErrors(ex, setErrors);
    }
    // close then
  };

  return (
    <>
      <Paper className={classes.paperWrapper}>
        <Typography variant="h5" align="center">
          Registeration
        </Typography>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            required
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="outlined"
            required
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
            required
          />
          <TextField
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            variant="outlined"
            required
          />
          <Box
            display="flex"
            style={{
              width: "100%",
              marginTop: "10px",
              marginLeft: "0px",
            }}
          >
            <ul className={classes.errorsList}>
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </Box>
          <Box display="flex">
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
}

export default RegisterForm;
