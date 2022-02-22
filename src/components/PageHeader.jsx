import { Box, Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Business } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pageCard: {
    padding: "15px",
    marginRight: "25px",
    marginBottom: "25px",
  },
  pageCardSubTitle: {
    color: "gray",
  },
}));

function PageHeader({ title, subTitle, children }) {
  const classes = useStyles();
  return (
    <>
      <Box display="flex">
        <Card className={classes.pageCard}>{children}</Card>
        <Box display="flex" flexDirection="column">
          <Typography variant="h5">{title}</Typography>
          <Typography
            variant="subtitle1"
            classes={{
              root: classes.pageCardSubTitle,
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PageHeader;
