import React, { useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Language, Store } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  papperWrapper: {
    padding: "20px",
  },
  headerWrapper: {
    height: "30vh",
    width: "100%",
    marginTop: "20px",
  },
  headerImage: {
    width: "50%",
    minWidth: "400px",
    height: "200px",
  },
  websiteIcon: {
    marginLeft: "10px",
    "&:hover": {
      color: "orange",
    },
  },
}));

function Info() {
  const { changeTab } = useContext(TabContext);
  const classes = useStyles();
  useEffect(() => {
    changeTab(config.tabs.Info);
  }, []);
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Paper className={classes.papperWrapper}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                className={classes.headerWrapper}
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <img
                  className={classes.headerImage}
                  src={process.env.PUBLIC_URL + "/loyalty_info.png"}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginTop: "30px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eleifend vulputate ligula, eu ultrices turpis pretium id.
                Curabitur urna magna, faucibus quis commodo et, faucibus et dui.
                Proin dignissim in tellus id sagittis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer enim est, congue a
                vestibulum vel, euismod id metus. Curabitur nec faucibus nunc,
                consequat commodo turpis. Integer enim nunc, dictum in diam nec,
                efficitur eleifend massa. Nam volutpat semper vulputate. Proin
                sed nisl venenatis, sollicitudin enim non, convallis elit.
                Mauris pellentesque mi ac tempor sollicitudin. Mauris facilisis
                purus at vehicula hendrerit. Integer sollicitudin ac ligula
                commodo elementum. Integer purus mauris, elementum in justo ut,
                vulputate tincidunt augue. Integer rhoncus faucibus maximus.
                Donec ac semper quam. Curabitur tincidunt nibh quam, auctor
                tincidunt nisl mollis nec. Proin non augue vel tellus lobortis
                lobortis. Praesent suscipit scelerisque enim vitae molestie.
                Vestibulum vitae porttitor mi, eu cursus libero. Duis tincidunt
                iaculis porta. Aliquam imperdiet vulputate ultricies. Fusce in
                erat ante. Curabitur elementum blandit condimentum. Curabitur
                elementum aliquet mi vel dapibus. Nulla laoreet ante lacinia
                arcu facilisis, nec pulvinar est vestibulum. Maecenas vel metus
                eget mi hendrerit tempor ut eget magna. Integer a lacus in velit
                placerat ultricies vel in nulla. Quisque ornare felis bibendum,
                bibendum diam non, congue justo.
              </Typography>
            </Grid>
            <Grid style={{ marginTop: "30px" }} item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Typography variant="body1">
                    <b>Visit our website </b> :
                  </Typography>

                  <IconButton className={classes.websiteIcon}>
                    <Language />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Info;
