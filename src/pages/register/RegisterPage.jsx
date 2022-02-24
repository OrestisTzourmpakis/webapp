import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: "black",
    opacity: "0.7",
    height: "100vh",
  },
  paperWrapper: {
    maxWidth: "500px",
    margin: "0 auto",
  },
}));

function RegisterPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.page}>
        <Box display="flex" alignItems="center">
          <Paper className={classes.paperWrapper}>adfasdf</Paper>
        </Box>
      </div>
    </>
  );
}

export default RegisterPage;
