import { Box, Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Business } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pageCard: {
    padding: "25px",
    marginRight: "15px",
    marginBottom: "15px",
  },
  pageCardSubTitle: {
    color: "gray",
  },
  titlesWrapper: {
    marginBottom: "25px",
  },
}));

function PageHeader({ title, subTitle, children }) {
  const classes = useStyles();
  return (
    <>
      <Box display="flex">
        <Card className={classes.pageCard}>{children}</Card>
        <Box
          display="flex"
          className={classes.titlesWrapper}
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h6">{title}</Typography>
          {subTitle && (
            <Typography
              variant="subtitle1"
              classes={{
                root: classes.pageCardSubTitle,
              }}
            >
              {subTitle}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}

export default PageHeader;
