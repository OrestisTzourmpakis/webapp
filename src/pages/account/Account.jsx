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
import { IsoRounded, Person, Redeem, Settings } from "@material-ui/icons";
import clsx from "clsx";
import AccountContent from "./AccountContent";
import PointsContent from "./PointsContent";
import HelpContent from "./HelpContent";

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

function Account() {
  const [menuIndex, setMenuIndex] = useState(0);
  const { changeTab } = useContext(TabContext);
  useEffect(() => {
    changeTab(config.tabs.Account);
  }, []);

  useEffect(() => {
    console.log(menuIndex);
  }, [menuIndex]);

  const handleListItemClick = (index) => {
    setMenuIndex(index);
  };

  const contentRenderer = () => {
    if (menuIndex === 0) {
      return <AccountContent />;
    } else if (menuIndex === 1) {
      return <PointsContent />;
    } else if (menuIndex === 2) {
      return <HelpContent />;
    }
  };

  const classes = useStyles();
  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Grid container spacing={1}>
          <Grid item md={3} className={classes.gridWrapper}>
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
                    <Person />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx({
                      [classes.listItemTextActive]: 0 === menuIndex,
                      [classes.listItemTextDisable]: 0 !== menuIndex,
                    })}
                    primary="Account"
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
                    <Redeem />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx({
                      [classes.listItemTextActive]: 1 === menuIndex,
                      [classes.listItemTextDisable]: 1 !== menuIndex,
                    })}
                    primary="Points"
                  />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={() => handleListItemClick(2)}
                >
                  <ListItemIcon
                    classes={{
                      root: clsx({
                        [classes.listItemActive]: 2 === menuIndex,
                      }),
                    }}
                  >
                    <Settings />
                  </ListItemIcon>
                  <ListItemText
                    className={clsx({
                      [classes.listItemTextActive]: 2 === menuIndex,
                      [classes.listItemTextDisable]: 2 !== menuIndex,
                    })}
                    primary="Help"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item md={9} xs={12}>
            <Paper className={classes.paperWrapper}>{contentRenderer()}</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Account;
