import React, { useEffect } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function CompanyStores() {
  const classes = useStyles();
  useEffect(() => {
    console.log("Company Stores");
  }, []);
  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Container maxWidth="md">
            <List>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default CompanyStores;
