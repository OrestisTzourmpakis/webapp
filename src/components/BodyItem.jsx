import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bodyItem: {
    minHeight: "300px",
  },
}));

function BodyItem(props) {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        className={classes.bodyItem}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {props.children}
        <Typography style={{ marginTop: "20px" }} variant="h5">
          {props.title}
        </Typography>
      </Grid>
    </Container>
  );
}

export default BodyItem;
