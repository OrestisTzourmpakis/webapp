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
  Paper,
  makeStyles,
  Typography,
  Checkbox,
  Modal,
  Button,
  Fab,
  Tooltip,
} from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import { Business, Tune } from "@material-ui/icons";
import { getAllCompanies } from "../../services/companyService";
import SearchBar from "../../components/SearchBar";
import { companiesData } from "../../services/dummyData";
import Pagination from "@material-ui/lab/Pagination";
import ListWithPagination from "../../components/ListWithPagination";
import { getCategories } from "../../services/categoriesService";
import FilterBox from "../../utils/filterBox";

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
  filterButton: {
    position: "absolute",
    top: "90%",
    left: "90%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

function Companies() {
  const classes = useStyles();
  const { changeTab } = useContext(TabContext);
  const [companies, setCompanies] = useState([]);
  const [companiesFilter, setCompaniesFilter] = useState([]);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [categories, setCategories] = useState([
    // {
    //   id: "all",
    //   name: "All",
    //   checked: true,
    // },
  ]);
  const itemPerPage = 3;
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const Init = async () => {
      try {
        const { data } = await getCategories();
        let categoryWithChecked = data.map((model) => {
          return { ...model, checked: false };
        });
        // let allValue = {
        //   id: "all",
        //   name: "All",
        //   checked: true,
        // };
        setCategories(categoryWithChecked);
      } catch (ex) {}
    };
    Init();
  }, []);

  const handleChange = (event, value) => setPage(value);

  const getCompanyCategory = (company) => {
    if (company?.categoryId === null) {
      return "Καμία";
    } else {
      var category = categories.find((c) => c.id === company.categoryId);
      return category.name;
    }
  };

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
          category={getCompanyCategory(company)}
        />
      </ListItem>
    );
  };

  useEffect(() => {
    changeTab(config.tabs.Companies);
    console.log("run");
    const Init = async () => {
      try {
        const { data } = await getAllCompanies();
        setCompanies(data);
        setCompaniesFilter(data);
      } catch (ex) {}
    };
    Init();
  }, []);

  const handleOpen = () => {
    setOpenFilterModal(true);
  };

  const handleClose = () => setOpenFilterModal(false);

  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Box className={classes.filterButton}>
          <Tooltip title="filter">
            <Fab color="primary" onClick={handleOpen}>
              <Tune />
            </Fab>
          </Tooltip>
        </Box>
        <Grid container>
          <Grid item xs={2}>
            <FilterBox
              initialList={companies}
              setFilterList={setCompaniesFilter}
              idString="categoryId"
              categories={categories}
              setCategories={setCategories}
            />
          </Grid>
          <Grid item xs={10}>
            <Container maxWidth="md">
              <Box
                display="flex"
                flexDirection="column"
                style={{ marginBottom: "50px" }}
              >
                <PageHeader title="Καταστήματα" subTitle="Λίστα καταστημάτων">
                  <Business fontSize="large" />
                </PageHeader>
                <ListWithPagination
                  data={companiesFilter}
                  listItem={listBody}
                  searchKeys={["name"]}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Modal open={openFilterModal} onClose={handleClose}>
        <Container>
          <FilterBox
            initialList={companies}
            setFilterList={setCompaniesFilter}
            idString="categoryId"
            categories={categories}
            setCategories={setCategories}
            mobile={true}
          />
        </Container>
      </Modal>
    </>
  );
}

export default Companies;
