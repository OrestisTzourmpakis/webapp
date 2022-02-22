import {
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((them) => ({
  listItem: {
    backgroundColor: "#e8e9ec",
    margin: "5px",
  },
}));

function PointsContent() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item container>
          <Grid xs={2}></Grid>
          <Grid xs={4}>
            <Typography variant="h5">Total Points:</Typography>
          </Grid>
          <Grid xs={4}>
            <Chip color="primary" label="2000" />
          </Grid>
        </Grid>
        <Grid item container>
          <Container>
            <List>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography variant="body">Company Name</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Typography variant="h5">200</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography variant="body">Company Name</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Typography variant="h5">200</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography variant="body">Company Name</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Typography variant="h5">200</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography variant="body">Company Name</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Typography variant="h5">200</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PointsContent;
