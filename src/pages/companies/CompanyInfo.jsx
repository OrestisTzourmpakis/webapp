import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: "20px",
  },
  formControler: {
    margin: "10px",
  },
  mb2: {
    marginBottom: "20px",
  },
}));
// #d4d2d1

function CompanyInfo() {
  const classes = useStyles();

  useEffect(() => {
    console.log("Company Info");
  }, []);
  return (
    <>
      <Paper className={classes.paperWrapper}>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Box display="flex" flexDirection="column">
              <Grid item container direction="column">
                <Box
                  className={classes.mb2}
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    align="start"
                    variant="body1"
                    style={{ color: "#d4d2d1" }}
                  >
                    Name
                  </Typography>
                  <Typography variant="h6">
                    <b>Company name</b>
                  </Typography>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  className={classes.mb2}
                  flexDirection="column"
                >
                  <Typography
                    align="start"
                    variant="body1"
                    style={{ color: "#d4d2d1" }}
                  >
                    Points:Euro
                  </Typography>
                  <Typography variant="h6">
                    <b>0.0002</b>
                  </Typography>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  className={classes.mb2}
                  flexDirection="column"
                >
                  <Typography
                    align="start"
                    variant="body1"
                    style={{ color: "#d4d2d1" }}
                  >
                    Euro:Points
                  </Typography>
                  <Typography variant="h6">
                    <b>0.23</b>
                  </Typography>
                  <Divider />
                </Box>
                {/* Socials */}
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default CompanyInfo;
