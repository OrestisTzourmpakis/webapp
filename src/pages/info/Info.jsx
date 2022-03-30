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
  Button
} from "@material-ui/core";
import { Language, Store } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  papperWrapper: {
    padding: "20px",
    height:"100%",
    width:"100%"
  },
  headerWrapper: {
    height: "100%",
    width: "100%",
    marginTop: "20px",
  },
  headerImage: {
    width: "50%",
    minWidth: "200px",
    height: "100%",
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
                  src={process.env.PUBLIC_URL + "/logo.png"}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginTop: "30px" }}>
              To Πρόγραμμα Πιστότητας και Επιβράβευσης Πελατών (Loyalty) είναι ένα αποτελεσματικό πρόγραμμα ανταμοιβών που σας επιβραβεύει με πόντους εξαργύρωσεις για κάθε αγορά που πραγματοποιείτε με ένα απο τα συμβεβλημένα καταστήματα μας.
Οι αγορές σας θα αποκτήσουν διπλή σημασία, κερδίζοντας πόντους για κάθε αγορά, ώστε να τους εξαργυρώσετε μελλοντικά.

Μια εξ ολοκλήρου ψηφιακή λύση με χρήση σύγχρονων τεχνολογιών χωρίς την ανάγκη χρήσης πλαστικών καρτών. Το μόνο που χρειάζεστε είναι να δημιουργήσετε έναν λογαριασμό είτε ηλεκτρονικά απο εδώ, είτε κατευθείαν απο οποιαδήποτε κατάστημα που συμμετέχει στο πρόγραμμα.
<ul>
  <li>
  Αποκτήστε πόντους για οικονομικές αγορές στο μέλλον
  </li>
  <li>
  Επωφεληθείτε με ειδικές προσφορές και εκπτώσεις
  </li>
  <li>
  Ενισχύστε την τοπική αγορά
  </li>
  
</ul>
              </Typography>
            </Grid>
            <Grid style={{ marginTop: "30px", marginBottom:"30px" }} item xs={12}>
              <Box display="flex" justifyContent="center">
                <Box display="flex" alignItems="center">
                  
                  <a href="https://loyaltylevadeon.gr/loyalty/">
                  <IconButton className={classes.websiteIcon}>
                    <Language />
                    <span style={{fontSize:"20px"}}>Περισσότερες Πληροφορίες</span>
                  </IconButton>
                  </a>
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
