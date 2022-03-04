import { makeStyles, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { createRoutes } from "../../routes";
import config from "../../config.json";
import { useContext, useState } from "react";
import { TabContext } from "../../contexts/TabContext";

import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { UserContext } from "../../contexts/UserContext";
import { authenticateUser } from "../../services/userService";
import CustomAppBar from "../../components/CustomAppBar";
import Sidebar from "../../components/Sidebar";
import BottomNavigationCustom from "../../components/BottomNavigationCustom";
const drawerWidth = "auto";
const appBarHeight = 70;

const useStyles = makeStyles((theme) => ({
  mainScreen: {
    width: "calculate(100%-200px)",
    padding: "20px",
    backgroundColor: "#e9edf6",
  },

  menuListItemIconRootSelected: {
    color: theme.custom.drawer.backgroundColor,
  },

  appbar: {
    minHeight: appBarHeight,
  },
  mainPage: {
    backgroundColor: "#e8e9ec",
    height: `calc(100vh - ${appBarHeight}px)`,

    overflow: "auto",
  },

  listTextColorActive: {
    color: theme.custom.drawer.backgroundColor,
  },
}));

function MainPage() {
  const classes = useStyles();
  const routes = createRoutes();
  const navigate = useNavigate();

  const { authed, userDetailObject, setUserContextObject } =
    useContext(UserContext);

  useEffect(() => {
    const Init = async () => {
      //console.log("Main Page called");
      // call the server to get the data and save the user after that!!
      console.log("Inside the main page useeffect");
      if (authed.email === "") {
        console.log("Authed email does not exists get it!!!");
        try {
          const response = await authenticateUser();
          if (response.roles.length !== 0) throw "";
          const obj = userDetailObject(response);
          console.log("To response apo to authenticate user!!!", response);
          setUserContextObject(obj);
          return;
        } catch (ex) {
          console.log("error");
          console.log("Error sto authenticate user:", ex);
          navigate("/login");
        }
      }
      //navigate("/login");
    };
    Init();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item>
          <Sidebar />
          <BottomNavigationCustom />
        </Grid>
        <Grid item xs>
          <Grid container direction="column">
            <Grid item className={classes.appbar}>
              <CustomAppBar />
            </Grid>
            <Grid item className={classes.mainPage}>
              {routes}
              {/* <Box className={classes.mainScreen}>
                <Typography variant="h4">Hello there</Typography>
              </Box> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MainPage;
