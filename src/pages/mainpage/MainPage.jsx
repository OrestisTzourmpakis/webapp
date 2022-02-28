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
import {
  Inbox,
  Mail,
  Home,
  Business,
  Person,
  Loyalty,
  MonetizationOn,
  Info,
} from "@material-ui/icons";
import React, { useEffect } from "react";
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
import { UserContext } from "../../contexts/UserContext";
import { authenticateUser } from "../../services/userService";
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
    color: theme.custom.drawer.backgroundColor,
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
  const [homeActive, setHomeActive] = useState(false);
  const [companiesActive, setCompaniesActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [pointsActive, setPointsActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const [offersActive, setOffersActive] = useState(false);

  const { authed, userDetailObject, setUserContextObject } =
    useContext(UserContext);
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
      case config.tabs.Offers:
        navigate("/offers");
        break;
      case config.tabs.Points:
        navigate("/points");
        break;
      case config.tabs.Info:
        navigate("/info");
        break;
    }
  };
  const homeIconStyles = clsx({});

  useEffect(() => {
    const Init = async () => {
      //console.log("Main Page called");
      // call the server to get the data and save the user after that!!
      console.log("Inside the main page useeffect");
      if (authed.email === "") {
        console.log("Authed email does not exists get it!!!");
        try {
          const response = await authenticateUser();
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
          <Drawer
            onMouseEnter={(e) => {
              setHideText(false);
            }}
            onMouseLeave={(e) => setHideText(true)}
            open={true}
            variant="persistent"
            classes={{ root: classes.root, paper: classes.drawerPaper }}
            elevation={0}
            PaperProps={{ sx: { width: "40%" } }}
          >
            <Box className={classes.logo} display="flex" flexDirection="column">
              <img
                height="70"
                width="70"
                src={process.env.PUBLIC_URL + "/logo.png"}
              />
              <Divider style={{ backgroundColor: "white" }} />
            </Box>
            <List className={classes.listClasses}>
              <ListItemCustom
                key="home"
                button
                onClick={() => handleListClick(config.tabs.Home)}
                alignItems="center"
                selected={tab === config.tabs.Home}
                onMouseEnter={() => setHomeActive(true)}
                onMouseLeave={() => {
                  setHomeActive(false);
                }}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerActiveText]:
                      homeActive || tab === config.tabs.Home,
                    [classes.drawerText]:
                      !homeActive && tab !== config.tabs.Home,
                  })}
                >
                  <Typography variant="body1">Home</Typography>
                </ListItemText>
              </ListItemCustom>
              <ListItemCustom
                key="companies"
                button
                selected={tab === config.tabs.Companies}
                alignItems="center"
                onClick={() => handleListClick(config.tabs.Companies)}
                onMouseEnter={() => setCompaniesActive(true)}
                onMouseLeave={() => setCompaniesActive(false)}
              >
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerActiveText]:
                      companiesActive || tab === config.tabs.Companies,
                    [classes.drawerText]:
                      !companiesActive && tab !== config.tabs.Companies,
                  })}
                >
                  <Typography variant="body1">Companies</Typography>
                </ListItemText>
              </ListItemCustom>

              <ListItemCustom
                key="offers"
                button
                alignItems="center"
                onClick={() => handleListClick(config.tabs.Offers)}
                selected={tab === config.tabs.Offers}
                onMouseEnter={() => setOffersActive(true)}
                onMouseLeave={() => setOffersActive(false)}
              >
                <ListItemIcon>
                  <Loyalty />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerActiveText]:
                      offersActive || tab === config.tabs.Offers,
                    [classes.drawerText]:
                      !offersActive && tab !== config.tabs.Offers,
                  })}
                >
                  <Typography variant="body1">Offers</Typography>
                </ListItemText>
              </ListItemCustom>

              <ListItemCustom
                key="points"
                button
                alignItems="center"
                onClick={() => handleListClick(config.tabs.Points)}
                selected={tab === config.tabs.Points}
                onMouseEnter={() => setPointsActive(true)}
                onMouseLeave={() => setPointsActive(false)}
              >
                <ListItemIcon>
                  <MonetizationOn />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerActiveText]:
                      pointsActive || tab === config.tabs.Points,
                    [classes.drawerText]:
                      !pointsActive && tab !== config.tabs.Points,
                  })}
                >
                  <Typography variant="body1">Points</Typography>
                </ListItemText>
              </ListItemCustom>

              <ListItemCustom
                key="info"
                button
                alignItems="center"
                onClick={() => handleListClick(config.tabs.Info)}
                selected={tab === config.tabs.Info}
                onMouseEnter={() => setInfoActive(true)}
                onMouseLeave={() => setInfoActive(false)}
              >
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText
                  className={clsx({
                    [classes.hideText]: hideText,
                    [classes.drawerActiveText]:
                      infoActive || tab === config.tabs.Info,
                    [classes.drawerText]:
                      !infoActive && tab !== config.tabs.Info,
                  })}
                >
                  <Typography variant="body1">Info</Typography>
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
