import {
  Box,
  Container,
  Fab,
  Grid,
  ListItem,
  makeStyles,
  Modal,
  Tooltip,
} from "@material-ui/core";
import { Loyalty, Tune } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../components/CustomDialog";
import ListWithPagination from "../../components/ListWithPagination";
import PageHeader from "../../components/PageHeader";
import SaleCardItem from "../../components/SaleCardItem";
import config from "../../config.json";
import { TabContext } from "../../contexts/TabContext";
import { getCategories } from "../../services/categoriesService";
import { getAllActiveSales } from "../../services/salesService";
import FilterBox from "../../utils/filterBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    cursor: "pointer",
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
function Offers() {
  const { changeTab } = useContext(TabContext);
  const [offers, setOffers] = useState([]);
  const [offersFilter, setOffersFilter] = useState([]);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [categories, setCategories] = useState([
    // {
    //   id: "all",
    //   name: "All",
    //   checked: true,
    // },
  ]);
  const classes = useStyles();
  const navigate = useNavigate();
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: "",
    description: "",
    image: null,
    salesCompany: null,
  });

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

  const handleListClick = (title, description, image, salesCompany) => {
    setDialogConfig({
      ...dialogConfig,
      title,
      description,
      image,
      salesCompany,
      open: true,
    });
  };

  const handleCloseDialog = () => {
    setDialogConfig({ ...dialogConfig, open: false });
  };

  const getSaleCompanyCategory = (sale) => {
    if (sale?.company?.categoryId === null) {
      return "Καμία";
    } else {
      var category = categories.find((c) => c.id === sale?.company.categoryId);
      return category.name;
    }
  };

  const listBody = (sale) => {
    return (
      <ListItem
        button
        key={sale.id}
        onClick={() =>
          handleListClick(
            sale.title,
            sale.description,
            sale.image,
            sale.company
          )
        }
        classes={{ root: classes.root }}
      >
        <SaleCardItem
          title={sale.title}
          description={sale.description}
          dateEnd={sale.dateEnd}
          allSales={true}
          imgSrc={sale.image}
          company={sale.company}
          dateStart={sale.dateStart}
          category={getSaleCompanyCategory(sale)}
        />
      </ListItem>
    );
  };

  useEffect(() => {
    changeTab(config.tabs.Offers);
  }, []);

  useEffect(() => {
    const Init = async () => {
      try {
        const { data } = await getAllActiveSales();
        setOffers(data);
        setOffersFilter(data);
      } catch (ex) {
        console.log(ex);
      }
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
              initialList={offers}
              setFilterList={setOffersFilter}
              idString="company.categoryId"
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
                <PageHeader title="Προσφορές" subTitle="Λίστα προσφορών">
                  <Loyalty fontSize="large" />
                </PageHeader>
                <ListWithPagination
                  data={offersFilter}
                  listItem={listBody}
                  searchKeys={["title", "company.name"]}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <CustomDialog
        open={dialogConfig.open}
        onClose={handleCloseDialog}
        title={dialogConfig.title}
        image={dialogConfig.image}
        description={dialogConfig.description}
        salesCompany={dialogConfig.salesCompany}
      />
      <Modal open={openFilterModal} onClose={handleClose}>
        <Container>
          <FilterBox
            initialList={offers}
            setFilterList={setOffersFilter}
            idString="company.categoryId"
            categories={categories}
            setCategories={setCategories}
            mobile={true}
          />
        </Container>
      </Modal>
    </>
  );
}

export default Offers;
