import { Box, Button, makeStyles, Paper, Typography, Modal,TextField } from "@material-ui/core";
import { Lock, Person } from "@material-ui/icons";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginCustomInput from "../../components/LoginCustomInput";
import ModalDialog from "../../components/ModalDialog";
import { UserContext } from "../../contexts/UserContext";
import { authenticateUser,requestResetPassword } from "../../services/userService";
import { handleErrors } from "../../utils/handleErrors.js";
import config from "../../config.json";



const useStyles = makeStyles((theme) => ({
  boxWrapper: {
    height: "100vh",
    backgroundColor: "black",
    opacity: "0.7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column"
  },
  loginPageWrapper: {
    width: "700px",
    borderRadius: "15px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "550px",
    },
  },
  personIcon: {
    position: "absolute",
    right: "50%",
    bottom: "0",
    width: "100px",
    borderRadius: "50%",
    height: "100px",
    backgroundColor: "blue",
    top: "-50px",
    color: "white",
    padding: "10px",
    transform: "translateX(50px)",
    marginLeft: "50px",
  },
  loginFormWrapper: {
    paddingLeft: "60px",
    paddingTop: "80px",
    paddingRight: "60px",
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
      paddingTop: "50px",
    },
  },
  loginInput: {},
  signInButton: {
    margin: "10px",
    backgroundColor: "blue",
  },
  signInGoogle: {
    backgroundColor: "white",
    color: "black",
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Login() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const person = <Person className="icon" />;
  const passwordIcon = <Lock className="icon" />;
  const location = useLocation();
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const { userLogin, authed } = useContext(UserContext);
  const classes = useStyles();
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [forgotPassRespond, setForgotPassRespond] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [googleSignInUrl, setGoogleSignInUrl] = useState("");

  const handleResetPassword = () => {
    handleOpenModal();
  };

  const handleResetPasswordButton = async () => {
    const result = await requestResetPassword(forgotEmail);
    setForgotPassRespond("A reset email was send. Check your emails ");
  }


  const handleLoginClick = async () => {
    try {
      setErrors([]);
      await userLogin({ email, password });
      navigate("/");
    } catch (ex) {
      handleErrors(ex, setErrors);
    }
  };

  const handleOpen = () => setRegisterFormOpen(true);

  const handleClose = () => setRegisterFormOpen(false);

  // useEffect(() => {
  //   // check if i have location state!!!!
  //   if (location.state === null) return;
  //   console.log(location.state.ex);
  //   setErrors([location.state.error.ex]);
  // }, []);

  useEffect(() => {
    const Init = async () => {
      try {
        var server = config.apiUrl;
        var controllerGoogleSignIn = "/useraccount/googlelogin";
        setGoogleSignInUrl(server+controllerGoogleSignIn);
        const result = await authenticateUser();
        if (result.roles.length !== 0) return;
        navigate("/");
      } catch (ex) { }

      if (location.state === null) return;

      setErrors([location.state.error.ex]);
    };
    // check if i have location state!!!!
    // check if user is authenticated!!

    Init();
  }, []);

  const handleEmailChange = (newValue) => {
    setEmail(newValue.target.value);
  };
  const handlePasswordChange = (newValue) => {
    setPassword(newValue.target.value);
  };
  return (
    <>
      <Box display="flex" className={classes.boxWrapper}>
        <h1 style={{color:"#4c4cfd", marginBottom:"100px"}}>Είσοδος για καταναλωτές</h1>
        <Paper elevation={3} className={classes.loginPageWrapper}>
        
          <Person className={classes.personIcon} />
          
          <Box
            display="flex"
            flexDirection="column"
            className={classes.loginFormWrapper}
          >
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLoginClick();
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant="h3" align="center" />
                <LoginCustomInput
                  Icon={person}
                  value={email}
                  placeHolder="Email"
                  handleOnChange={handleEmailChange}
                />
                <LoginCustomInput
                  Icon={passwordIcon}
                  value={password}
                  placeHolder="Password"
                  type="password"
                  handleOnChange={handlePasswordChange}
                />
                <Box
                  display="flex"
                  style={{
                    width: "80%",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                >
                  <ul className={classes.errorsList}>
                    {errors.map((error) => (
                      <li>{error}</li>
                    ))}
                  </ul>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.signInButton}
                  >
                    Sign in
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.signInButton}
                    onClick={handleOpen}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </form>
            <Box display="flex" flexDirection="column">
              <form
                className="googleForm"
                method="GET"
                //window.location.origin.toString()
                action={googleSignInUrl}
              >
                <input
                  type="hidden"
                  name="viewUrl"
                  value={window.location.origin.toString()}
                />
                <Typography
                  align="center"
                  style={{ color: "black" }}
                  variant="body1"
                >
                  Or
                </Typography>
                <Box
                  display="flex"
                  style={{ marginTop: "10px" }}
                  justifyContent="center"
                >
                  <Button
                    className={classes.signInGoogle}
                    variant="contained"
                    type="submit"
                  >
                    <img
                      style={{ marginRight: "10px" }}
                      src={process.env.PUBLIC_URL + "/googleLogo.png"}
                      width={30}
                    />
                    <Typography variant="body1">Sign in with Google</Typography>
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Button
                    onClick={handleResetPassword}
                    style={{ marginTop: "20px" }}
                    color="primary"
                  >
                    Reset Password
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Paper>
      </Box>
      <ModalDialog open={registerFormOpen} handleClose={handleClose} />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            RESET PASSWORD
          </Typography>
          <TextField
            id="outlined-required"
            label="Email"
            onChange={(e) => setForgotEmail(e.currentTarget.value)}
            value={forgotEmail}
          />
          <Button
            onClick={handleResetPasswordButton}
            style={{ marginTop: "20px" }}
            color="primary"
          >
            Reset Password
          </Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {forgotPassRespond}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Login;
