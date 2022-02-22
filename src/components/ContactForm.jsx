import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

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
}));

function ContactForm() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contactWrapper}>
        <Container className={classes.contactContainer}>
          <div>
            <form>
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
                    <TextField
                      className={classes.inputMargin}
                      id="senderEmail"
                      label="Your email"
                    />
                    <TextField
                      className={classes.inputMargin}
                      id="title"
                      label="Topic"
                    />
                    <TextField
                      className={classes.inputMargin}
                      id="description"
                      multiline
                      variant="outlined"
                      minRows={4}
                      label="Message"
                    />
                    <Box display="flex" justifyContent="center">
                      <Button
                        variant="contained"
                        style={{ color: "black", backgroundColor: "white" }}
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
