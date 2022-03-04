import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  makeStyles,
} from "@material-ui/core";
import {
  Business,
  Home,
  Info,
  Loyalty,
  MonetizationOn,
} from "@material-ui/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TabContext } from "../contexts/TabContext";

const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    height: "50px",
    position: "fixed",
    zIndex: 99,
    bottom: 0,
    left: 0,
    right: 0,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  bottomNavigationRoot: {
    color: "white",
  },
}));

function BottomNavigationCustom() {
  const navigate = useNavigate();
  const classes = useStyles();
  const { bottomNavigationIndex } = useContext(TabContext);
  return (
    <Box className={classes.bottomNavigation}>
      <BottomNavigation
        showLabels
        style={{ backgroundColor: "#222d34" }}
        value={bottomNavigationIndex}
      >
        <BottomNavigationAction
          classes={{ root: classes.bottomNavigationRoot }}
          onClick={() => navigate("/")}
          label="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          classes={{ root: classes.bottomNavigationRoot }}
          onClick={() => navigate("/companies")}
          label="Companies"
          icon={<Business />}
        />
        <BottomNavigationAction
          classes={{ root: classes.bottomNavigationRoot }}
          onClick={() => navigate("/offers")}
          label="Offers"
          icon={<Loyalty />}
        />
        <BottomNavigationAction
          classes={{ root: classes.bottomNavigationRoot }}
          onClick={() => navigate("/points")}
          label="Points"
          icon={<MonetizationOn />}
        />
        <BottomNavigationAction
          classes={{ root: classes.bottomNavigationRoot }}
          onClick={() => navigate("/info")}
          label="Info"
          icon={<Info />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNavigationCustom;
