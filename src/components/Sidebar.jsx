import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  Business,
  Home,
  Info,
  Loyalty,
  MonetizationOn,
} from "@material-ui/icons";
import React, { useState, useEffect, useContext } from "react";
import config from "../config.json";
import clsx from "clsx";
import { TabContext } from "../contexts/TabContext";
import { useNavigate } from "react-router-dom";
const appBarHeight = 70;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
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
  logo: {
    height: appBarHeight,
    backgroundColor: "#222d34",
  },
  listClasses: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0px",
  },
  hideText: {
    opacity: "0",
    height: "0px",
    width: "0px",
  },
  drawerActiveText: {
    color: theme.custom.drawer.backgroundColor,
  },
  drawerText: {
    color: "white",
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

function Sidebar() {
  const [hideText, setHideText] = useState(true);
  const [homeActive, setHomeActive] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [companiesActive, setCompaniesActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [pointsActive, setPointsActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const [offersActive, setOffersActive] = useState(false);
  const { tab } = useContext(TabContext);
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
      case config.tabs.Offers:
        navigate("/offers");
        break;

      case config.tabs.Info:
        navigate("/info");
        break;
    }
  };
  return (
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
              [classes.drawerText]: !homeActive && tab !== config.tabs.Home,
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
              [classes.drawerText]: !offersActive && tab !== config.tabs.Offers,
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
              [classes.drawerText]: !pointsActive && tab !== config.tabs.Points,
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
              [classes.drawerText]: !infoActive && tab !== config.tabs.Info,
            })}
          >
            <Typography variant="body1">Info</Typography>
          </ListItemText>
        </ListItemCustom>
      </List>
    </Drawer>
  );
}

export default Sidebar;
