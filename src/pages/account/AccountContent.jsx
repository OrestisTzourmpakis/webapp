import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useContext, useEffect, useState } from "react";
import AccountDialog from "../../components/AccountDialog";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import { UserContext } from "../../contexts/UserContext";
import { requestResetPassword, updateUser } from "../../services/userService";
import { handleErrors } from "../../utils/handleErrors";

const useStyles = makeStyles((them) => ({
  textField: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  saveButton: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  cancelButton: {
    marginLeft: "20px",
  },
  title: {
    marginTop: "20px",
  },
}));

function AccountContent() {
  const classes = useStyles();
  const [editedState, setEditedState] = useState(null);
  const [initialState, setInitialState] = useState({
    userName: "",
    email: "",
    id: "",
  });
  const [edit, setEdit] = useState(false);
  const [dialogConfig, setDialogConfig] = useState({
    title: "",
    description: "",
    confirm: null,
    open: false,
  });
  const { authed, setAuthed } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const { openSnackbar } = useContext(SnackbarContext);
  const openDialog = (value) => {
    setDialogConfig({ ...dialogConfig, open: value });
  };
  useEffect(() => {
    if (authed?.userName === "") return;
    setInitialState({
      userName: authed.username,
      email: authed.email,
      id: authed.id,
    });
    setEditedState({
      userName: authed.username,
      email: authed.email,
      id: authed.id,
    });
  }, [authed]);
  const handleSaveChanges = () => {
    try {
      setErrors([]);
      validations();
    } catch (ex) {
      handleErrors(ex, setErrors);
      return;
    }
    setDialogConfig({
      ...dialogConfig,
      description: "Do you want to save the changes?",
      title: "Save Changes",
      confirm: confirmSaveChanges,
      open: true,
    });
  };

  const confirmSaveChanges = async () => {
    try {
      setErrors([]);
      const result = await updateUser(editedState);
      // if its confirmed then we have to update the initial state and the context!!!
      setAuthed({
        id: editedState.id,
        username: editedState.userName,
        email: editedState.email,
      });
      openSnackbar("Changes saved successfully.", false);
    } catch (ex) {
      handleErrors(ex, setErrors);
    } finally {
      openDialog(false);
    }
  };
  const handleResetPassword = () => {
    setDialogConfig({
      ...dialogConfig,
      description: "Do you want to reset your password?",
      title: "Reset Password",
      confirm: confirmResetPassword,
      open: true,
    });
    console.log("Reset password");
  };

  const confirmResetPassword = async () => {
    try {
      const result = await requestResetPassword(authed?.email);
      openSnackbar("A reset email was send.", false);
    } catch (ex) {
      console.log("errors");
    } finally {
      openDialog(false);
    }
    console.log("Reset password called!!");
  };

  const validations = () => {
    if (
      editedState?.userName.trim() === "" ||
      editedState?.email.trim() === ""
    ) {
      throw "Username and email fields are required.";
    }
  };

  const handleEditClick = () => {
    setErrors([]);
    setEdit(true);
  };

  const handleCancelClick = () => {
    setErrors([]);
    setEdit(false);
    setEditedState({ ...initialState });
  };

  const handleUsernameChange = (value) => {
    setEditedState({
      ...editedState,
      userName: value,
    });
  };

  const handleEmailChange = (value) => {
    setEditedState({
      ...editedState,
      email: value,
    });
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ marginTop: "40px" }}
      >
        <Grid item xs={12}>
          <Paper style={{ padding: "20px" }}>
            <Grid container>
              <Grid xs={4} item container alignItems="center"></Grid>
              <Grid xs={12} item container direction="column">
                <Typography className={classes.title} variant="h5">
                  Profile
                </Typography>
                <form>
                  <Grid item container direction="column">
                    <TextField
                      className={classes.textField}
                      id="Email"
                      variant="outlined"
                      label="Email"
                      value={editedState?.email}
                      type="email"
                      disabled={!edit}
                      style={{ width: "400px" }}
                      required
                      onChange={(e) => handleEmailChange(e.currentTarget.value)}
                    />
                    <TextField
                      id="Username"
                      variant="outlined"
                      label="Username"
                      required
                      value={editedState?.userName}
                      onChange={(e) =>
                        handleUsernameChange(e.currentTarget.value)
                      }
                      disabled={!edit}
                    />
                    <Box display="flex" justifyContent="center">
                      <Button
                        onClick={handleResetPassword}
                        style={{ marginTop: "20px" }}
                        color="primary"
                      >
                        Reset Password
                      </Button>
                    </Box>
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
                          <li style={{ color: "red" }}>{error}</li>
                        ))}
                      </ul>
                    </Box>
                    {edit ? (
                      <Box display="flex" justifyContent="flex-end">
                        <Button
                          className={classes.saveButton}
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            handleSaveChanges();
                          }}
                        >
                          Save Changes
                        </Button>
                        <Button
                          className={clsx([
                            classes.saveButton,
                            classes.cancelButton,
                          ])}
                          variant="contained"
                          onClick={handleCancelClick}
                        >
                          Cancel
                        </Button>
                      </Box>
                    ) : (
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        style={{ marginTop: "20px" }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleEditClick}
                        >
                          Edit
                        </Button>
                      </Box>
                    )}
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <AccountDialog
        open={dialogConfig?.open}
        setOpen={openDialog}
        title={dialogConfig?.title}
        description={dialogConfig?.description}
        handleConfirm={dialogConfig?.confirm}
      />
    </>
  );
}

export default AccountContent;
