import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "60vh",
    backgroundImage:
      "linear-gradient(to right bottom,rgba(30,32,29,0.8),rgba(22,26,25,0.8)),url(https://miro.medium.com/max/1400/1*G8aV_j9wxGXS5SMDAL-R0Q.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "relative",
  },
  headerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "999",
    color: "white",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
}));

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Box className={classes.header}>
        <Box
          className={classes.headerText}
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h4">Welcome to Loayalty Platform</Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            Take advantage of the current active offers, earn and redeem your
            points to get rewards.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            style={{ marginTop: "10px" }}
          >
            <Button variant="contained" onClick={() => navigate("/offers")}>
              Check Offers
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
