import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

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
  return (
    <>
      <Container>
        <Grid container>
          <Grid xs={4} item container alignItems="center"></Grid>
          <Grid xs={12} md={6} lg={6} item container direction="column">
            <Typography className={classes.title} variant="h5">
              User Settings
            </Typography>
            <form>
              <Grid item container direction="column">
                <TextField
                  className={classes.textField}
                  id="Email"
                  variant="outlined"
                  label="Email"
                />
                <TextField id="Username" variant="outlined" label="Username" />
                <Box display="flex">
                  <Button
                    className={classes.saveButton}
                    variant="contained"
                    color="primary"
                  >
                    Save Changes
                  </Button>
                  <Button
                    className={clsx([classes.saveButton, classes.cancelButton])}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AccountContent;
