import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import { Business } from "@material-ui/icons";
import { getAllCompanies } from "../../services/companyService";
import SearchBar from "../../components/SearchBar";
import { companiesData } from "../../services/dummyData";
import Pagination from "@material-ui/lab/Pagination";
import ListWithPagination from "../../components/ListWithPagination";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.06)",
    },
    paddingLeft: "0px",
    paddingRight: "0px",
  },
}));

function Companies() {
  const classes = useStyles();
  const { changeTab } = useContext(TabContext);
  const [companies, setCompanies] = useState([]);
  const itemPerPage = 3;
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (event, value) => setPage(value);

  const listBody = (company) => {
    return (
      <ListItem
        key={company.id}
        onClick={() => {
          navigate(`/companies/${company.id}`);
        }}
        classes={{ root: classes.root }}
      >
        <CardItem
          name={company.name}
          logo={company.logo}
          companySalesCount={company.companySalesCount}
          companyUsersCount={company.companyUsersCount}
          companyStoresCount={company.companyStoresCount}
        />
      </ListItem>
    );
  };

  useEffect(() => {
    changeTab(config.tabs.Companies);
    const Init = async () => {
      try {
        const { data } = await getAllCompanies();
        //const data = companiesData();
        setCompanies(data);
      } catch (ex) {}
    };
    Init();
  }, []);

  return (
    <>
      {/* <div
        style={{ height: "200px", width: "100%", backgroundColor: "red" }}
      ></div> */}
      <Container style={{ paddingTop: "50px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Box
                display="flex"
                flexDirection="column"
                style={{ marginBottom: "50px" }}
              >
                <PageHeader title="Companies" subTitle="List of companies">
                  <Business fontSize="large" />
                </PageHeader>
                <ListWithPagination
                  data={companies}
                  listItem={listBody}
                  searchKeys={["name"]}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Companies;
