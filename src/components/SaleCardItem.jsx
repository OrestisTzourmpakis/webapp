import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    paddingRight: "25px",
  },
  cardContent: {
    padding: "10px",
    "&:last-child": {
      padding: "10px",
    },
  },
}));

function SaleCardItem() {
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardContent className={classes.cardContent}>
          <Grid container className={classes.cardWrapper}>
            <Grid item container alignItems="center" justifyContent="center" xs>
              <Typography variant="h6">Title</Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="center" xs>
              <Typography variant="h6">Status</Typography>
            </Grid>
            <Grid
              item
              container
              xs
              alignItems="center"
              justifyContent="flex-end"
            >
              <ArrowForward />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default SaleCardItem;
