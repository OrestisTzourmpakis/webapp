import {
  Box,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "300px",
    minWidth: "200px",
  },
}));

function BodyHowToItem(props) {
  const classes = useStyles();
  return (
    <>
      <Paper
        elevation={3}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
            alignItems="center"
            justifyContent="center"
          >
            {props.Icon}
            <Typography style={{ marginTop: "15px" }} variant="h5">
              {props.title}
            </Typography>
            <Typography
              style={{ marginTop: "10px", textAlign: "center" }}
              variant="body1"
            >
              {props.body}
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default BodyHowToItem;
