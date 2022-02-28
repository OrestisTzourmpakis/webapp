import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/styles";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";
import CompanyInfo from "./CompanyInfo";
import CompanyStores from "./CompanyStores";
import CompanySales from "./CompanySales";
import { ArrowBack, Business } from "@material-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyDetailsContext } from "../../contexts/CompanyDetailsContext";
import { getCompanyById } from "../../services/companyService";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
      className={classes.panel}
    >
      {value === index && [children]}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyProps(index) {
  return {
    id: `fu;;-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.custom.mainPage.backgroundColor,
    width: "100%",
  },
  panel: {
    paddingTop: "20px",
  },
}));

function CompanyDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  const { company, setCompany } = useContext(CompanyDetailsContext);
  useEffect(() => {
    const Init = async () => {
      // get the params!!!!
      const { companyId: id } = params;
      const { data } = await getCompanyById(id);
      // get the company!!!!
      // exw edw pera to id tou company!!!!!
      console.log(data);
      setCompany(data);
    };
    Init();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Grid container>
          <Grid item xs>
            <Container>
              <div className={classes.root}>
                <IconButton onClick={() => navigate(-1)}>
                  <ArrowBack />
                </IconButton>
                <PageHeader title={company?.name}>
                  <Avatar src={company?.logo} />
                </PageHeader>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Info" {...allyProps(0)} />
                    <Tab label="Stores" {...allyProps(1)} />
                    <Tab label="Sales" {...allyProps(2)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <div>
                      <CompanyInfo />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <div>
                      <CompanyStores />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <div>
                      <CompanySales />
                    </div>
                  </TabPanel>
                </SwipeableViews>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CompanyDetails;
