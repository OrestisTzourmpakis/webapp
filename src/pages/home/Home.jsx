import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import { Box, Grid } from "@material-ui/core";
import Carousel from "../../components/CustomCarousel";
import Header from "../../components/Header";
import Body from "../../components/Body";
import BodyHowTo from "../../components/BodyHowTo";
import { makeStyles } from "@material-ui/styles";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

const useStyles = makeStyles((theme) => ({
  bodyHowTo: {
    padding: "50px",
    backgroundImage:
      "linear-gradient(to right bottom,rgba(30,32,29,0.8),rgba(22,26,25,0.8)),url(https://www.publicdomainpictures.net/pictures/10000/velka/black-monkey-11280155875i3QV.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
}));

function Home() {
  const { changeTab } = useContext(TabContext);

  const classes = useStyles();
  useEffect(() => {
    changeTab(config.tabs.Home);
  }, []);

  return (
    <>
      <Grid container direction="column">
        {/* Carousel */}
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          {/* Body  */}
          <Body />
        </Grid>
        {/* Body Steps */}
        <Grid item xs={12} className={classes.bodyHowTo}>
          <BodyHowTo />
        </Grid>
        {/* Contact Us */}
        <Grid item xs={12}>
          <ContactForm />
        </Grid>
        {/* Footer */}

        <Box display="flex" style={{ width: "100%" }}>
          <Footer />
        </Box>
      </Grid>
    </>
  );
}

export default Home;
