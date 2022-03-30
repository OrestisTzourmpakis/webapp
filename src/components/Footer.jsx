import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Copyright, Facebook, Instagram, Language } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: "#302b27",
    height: "100%",
    width: "100%",
    minHeight: "20vh",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
    },
  },
  footerContainer: {
    maxWidth: "600px",
  },
  socialIcons: {
    color: "white",
    "&:hover": {
      color: "orange",
    },
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
              <Grid item xs={6} style={{ marginTop: "30px" }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  style={{ height: "100%" }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    style={{ height: "100%" }}
                  >
                    <IconButton className={classes.socialIcons}>
                      <a href="https://loyaltylevadeon.gr/loyalty/" style={{color:"white"}}><Language /> Loyalty Program</a>
                    </IconButton>
                  </Box>
                </Box>
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
                    Πλατφόρμα Loyalty
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography style={{ color: "white" }}>
                  <a href="https://loyaltylevadeon.gr/%cf%80%ce%bf%ce%bb%ce%b9%cf%84%ce%b9%ce%ba%ce%ae-%ce%b1%cf%80%ce%bf%cf%81%cf%81%ce%ae%cf%84%ce%bf%cf%85/" style={{color:"white"}}>Terms and Conditions | Privacy Policy</a>
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
