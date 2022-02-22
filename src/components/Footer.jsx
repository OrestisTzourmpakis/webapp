import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: "#302b27",
    minHeight: "20vh",
  },
  footerContainer: {
    maxWidth: "600px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footerWrapper}>
        <Container>
          <Grid container direction="column">
            <Grid item container>
              <Grid item xs={6}>
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  height={200}
                  width={200}
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={6}>
                <Box display="flex">
                  <Copyright style={{ color: "white" }} />
                  <Typography
                    style={{ color: "white", marginLeft: "15px" }}
                    variant="subtitle1"
                  >
                    Λειβαδια Loayalty
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography style={{ color: "white" }}>
                  Terms and Conditions | Privacy Policy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Footer;
