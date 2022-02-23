import {
  Drawer,
  List,
  ListItemIcon,
  Divider,
  ListItem,
  ListItemText,
  Box,
  Typography,
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core";
import HomePage from "../home/Home";
import { Inbox, Mail, Home, Business, Person } from "@material-ui/icons";
import React from "react";
import { createRoutes } from "../../routes";
import config from "../../config.json";
import { useContext, useState } from "react";
import { TabContext } from "../../contexts/TabContext";
import { withStyles } from "@material-ui/styles";
import Companies from "../companies/Companies";
import Account from "../account/Account";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Points from "../points/Points";
import clsx from "clsx";
const drawerWidth = "auto";
const appBarHeight = 70;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
  },
  mainScreen: {
    width: "calculate(100%-200px)",
    padding: "20px",
    backgroundColor: "#e9edf6",
  },
  drawerPaper: {
    backgroundColor: "#222d34",
    border: "none",
    position: "static",
    height: "100vh",
    width: "80px",
    transition: "all 0.4s ease",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      width: "200px",
    },
  },
  listClasses: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0px",
  },

  menuListItemIconRootSelected: {
    color: theme.custom.drawer.backgroundColor,
  },

  logo: {
    height: appBarHeight,
    backgroundColor: "#222d34",
  },
  appbar: {
    minHeight: appBarHeight,
  },
  mainPage: {
    backgroundColor: "#e8e9ec",
    height: `calc(100vh - ${appBarHeight}px)`,

    overflow: "auto",
  },
  hideText: {
    opacity: "0",
    height: "0px",
    width: "0px",
  },
  showText: {
    opacity: "1",
    height: "auto",
    width: "auto",
  },
  drawerText: {
    color: "white",
  },
  drawerActiveText: {
    color: "white",
  },
  listTextColorActive: {
    color: theme.custom.drawer.backgroundColor,
  },
}));

const ListItemCustom = withStyles((theme) => ({
  root: {
    "& .MuiListItemIcon-root": {
      minWidth: "0px",
      padding: "10px",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "white",
      "& .MuiListItemIcon-root": {
        color: theme.custom.drawer.backgroundColor,
      },
    },
    "&$selected": {
      backgroundColor: "white",
      "& .MuiListItemIcon-root": {
        color: theme.custom.drawer.backgroundColor,
      },
    },
    "&$selected:hover": {
      backgroundColor: "white",
    },
  },
  selected: {},
}))(ListItem);

function MainPage() {
  const classes = useStyles();
  const routes = createRoutes();
  const { tab, changeTab } = useContext(TabContext);
  const [hideText, setHideText] = useState(true);
  const navigate = useNavigate();
  const [menuIconsStyle, setMenuIconsStyle] = useState({
    home: false,
    Inbox: false,
    account: false,
  });
  const handleListClick = (tab) => {
    switch (tab) {
      case config.tabs.Home:
        navigate("/");
        break;
      case config.tabs.Companies:
        navigate("/companies");
        break;
      case config.tabs.Points:
        navigate("/points");
        break;
      case config.tabs.Account:
        navigate("/account");
        break;
    }
  };
  const homeIconStyles = clsx();
  return (
    <>
      <Grid container>
        <Grid item>
          <Drawer
            onMouseEnter={(e) => {
              console.log("entered");
              setHideText(false);
            }}
            onMouseLeave={(e) => setHideText(true)}
            open={true}
            variant="persistent"
            classes={{ root: classes.root, paper: classes.drawerPaper }}
            elevation={0}
            PaperProps={{ sx: { width: "40%" } }}
          >
            <Box className={classes.logo}>
              <img
                height="70"
                width="70"
                src={process.env.PUBLIC_URL + "/logo.png"}
              />
            </Box>
            <List className={classes.listClasses}>
              <ListItemCustom
                button
                onClick={() => handleListClick(config.tabs.Home)}
                alignItems="center"
                selected={tab === config.tabs.Home}
                onMouseEnter={() => {}}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerText]: true,
                  })}
                >
                  <Typography variant="body1">Home</Typography>
                </ListItemText>
              </ListItemCustom>
              <ListItemCustom
                button
                selected={tab === config.tabs.Companies}
                alignItems="center"
                onClick={() => handleListClick(config.tabs.Companies)}
              >
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerText]: true,
                  })}
                >
                  <Typography variant="body1">Companies</Typography>
                </ListItemText>
              </ListItemCustom>
              <ListItemCustom
                button
                alignItems="center"
                onClick={() => handleListClick(config.tabs.Account)}
                selected={tab === config.tabs.Account}
              >
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerText]: true,
                  })}
                >
                  <Typography variant="body1">Account</Typography>
                </ListItemText>
              </ListItemCustom>
            </List>
          </Drawer>
        </Grid>
        <Grid item xs>
          <Grid container direction="column">
            <Grid item className={classes.appbar}></Grid>
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
