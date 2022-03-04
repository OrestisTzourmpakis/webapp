import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { UserContext } from "../contexts/UserContext";
import { sendEmail } from "../services/userService";

const useStyles = makeStyles((theme) => ({
  contactWrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fbab7e",
    backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  contactContainer: {
    padding: "40px",
    maxWidth: "600px",
  },
  inputMargin: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  formInput: {
    "&$focused": {
      backgroundColor: "#fff",
      borderColor: "red",
    },
  },
  focused: {},
}));

const useStylesMessage = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    color: "white",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {},
    "&$focused": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: "white",
      color: "white",
    },
  },
  focused: {},
}));

function MessageTextField(props) {
  const classes = useStylesMessage();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

function ContactForm() {
  const classes = useStyles();
  const [topic, setTopic] = useState("");
  const { authed } = useContext(UserContext);
  const { openSnackbar } = useContext(SnackbarContext);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sendEmail(topic, message, authed?.email);
      setTopic("");
      setMessage("");
      openSnackbar("Email Send Successfully!");
    } catch (ex) {
      openSnackbar("Something happend please try again later...", true);
    }
  };
  return (
    <>
      <div className={classes.contactWrapper}>
        <Container className={classes.contactContainer}>
          <div>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" style={{ marginTop: "20px" }}>
                <Paper
                  elevation={3}
                  style={{ padding: "30px", backgroundColor: "inherit" }}
                >
                  <Box display="flex" flexDirection="column">
                    <Typography style={{ color: "white" }} variant="h5">
                      Get in touch
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "white", marginTop: "20px" }}
                    >
                      Send us an email regarding any issue.
                    </Typography>
                    <MessageTextField
                      label="Topic"
                      style={{ marginTop: "20px" }}
                      className={classes.margin}
                      variant="filled"
                      onChange={(e) => setTopic(e.currentTarget.value)}
                      value={topic}
                      required
                      id="topic"
                    />
                    <MessageTextField
                      style={{ marginTop: "20px", marginBottom: "20px" }}
                      label="Message"
                      className={classes.margin}
                      variant="filled"
                      multiline
                      value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      required
                      minRows={4}
                      id="message"
                    />
                    <Box display="flex" justifyContent="center">
                      <Button
                        variant="contained"
                        style={{ color: "black", backgroundColor: "white" }}
                        type="submit"
                        endIcon={<Send />}
                      >
                        Send
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
