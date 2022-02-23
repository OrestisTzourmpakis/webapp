import { Card, CardContent, Typography, Grid, Paper } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: "10px",
  },
  paperContent: {
    padding: "10px",
    "&:last-child": {
      padding: "10px",
    },
  },
}));

function SaleCardItem({ title, description, dateEnd }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paperWrapper}>
        <Grid container className={classes.cardWrapper}>
          <Grid item container alignItems="center" justifyContent="center" xs>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center" xs>
            <Typography variant="h6">Until: {dateEnd}</Typography>
          </Grid>
          <Grid item container xs alignItems="center" justifyContent="flex-end">
            <ArrowForward />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default SaleCardItem;
