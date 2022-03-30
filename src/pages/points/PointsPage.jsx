import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import {
  IsoRounded,
  Person,
  Redeem,
  Settings,
  SettingsBackupRestore,
} from "@material-ui/icons";
import clsx from "clsx";
import AccountContent from "../account/AccountContent";
import PointsContent from "../account/PointsContent";
import HelpContent from "../account/HelpContent";
import Points from "./Points";
import PointsHistory from "./PointsHistory";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: "20px",
  },
  gridWrapper: {},
  listRoot: {},
  listItemActive: {
    color: "#7496d4",
  },
  listItemDisable: {},
  listItemTextActive: {
    color: "black",
  },
  listItemTextDisable: {
    color: "gray",
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e8e9ec",
      borderRadius: "15px",
    },
  },
  listRoot: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

function PointsPage() {
  const [menuIndex, setMenuIndex] = useState(0);
  const { changeTab } = useContext(TabContext);
  useEffect(() => {
    changeTab(config.tabs.Points);
  }, []);

  const handleListItemClick = (index) => {
    setMenuIndex(index);
  };

  const contentRenderer = () => {
    if (menuIndex === 1) {
      return <PointsHistory />;
    } else if (menuIndex === 0) {
      return <Points />;
    }
  };

  const classes = useStyles();
  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12} className={classes.gridWrapper}>
            <Paper className={classes.paperWrapper}>
              <List classes={{ root: classes.listRoot }}>
                <ListItem
                  className={classes.listItem}
                  onClick={() => handleListItemClick(0)}
                >
                  <ListItemIcon
                    classes={{
                      root: clsx({
                        [classes.listItemActive]: 0 === menuIndex,
                      }),
                    }}
                  >
                    <Redeem />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx({
                      [classes.listItemTextActive]: 0 === menuIndex,
                      [classes.listItemTextDisable]: 0 !== menuIndex,
                    })}
                    primary="Πόντοι"
                  />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={() => handleListItemClick(1)}
                >
                  <ListItemIcon
                    classes={{
                      root: clsx({
                        [classes.listItemActive]: 1 === menuIndex,
                      }),
                    }}
                  >
                    <SettingsBackupRestore />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx({
                      [classes.listItemTextActive]: 1 === menuIndex,
                      [classes.listItemTextDisable]: 1 !== menuIndex,
                    })}
                    primary="Ιστορικό Πόντων"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item md={9} xs={12} >
            <Paper className={classes.paperWrapper} style={{padding:"0px",margin:"0px"}}>{contentRenderer()} </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PointsPage;
