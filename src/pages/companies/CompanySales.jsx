import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import SaleCardItem from "../../components/SaleCardItem";
import CustomDialog from "../../components/CustomDialog";
import OffersList from "../../components/OffersList";
import { salesData } from "../../services/dummyData";
import { CompanyDetailsContext } from "../../contexts/CompanyDetailsContext";
import { getSalesByCompanyId } from "../../services/salesService";
import ListWithPagination from "../../components/ListWithPagination";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  listItem: {
    display: "block",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    cursor: "pointer",
  },
}));

function CompanySales() {
  const [sales, setSales] = useState([]);
  const classes = useStyles();
  const { company } = useContext(CompanyDetailsContext);
  // useEffect(() => {
  //   const Init = async () => {
  //     try {
  //       const data = salesData();
  //       setSales(data);
  //     } catch (ex) {}
  //   };
  //   Init();
  // }, []);
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: "",
    description: "",
    image: null,
    salesCompany: null,
  });
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

  useEffect(() => {
    const Init = async () => {
      if (company === null) return;
      const { data } = await getSalesByCompanyId(company.id);
      setSales(data);
    };
    Init();
  }, [company]);

  // const getSaleCompanyCategory = (sale) => {
  //   if (sale?.company?.categoryId === null) {
  //     return "Καμία";
  //   } else {
  //     var category = categories.find((c) => c.id === sale?.company.categoryId);
  //     return category.name;
  //   }
  // };

  const listBody = (sale) => {
    return (
      <ListItem
        button
        key={sale.id}
        onClick={() => {
          handleListClick(
            sale.title,
            sale.description,
            sale.image,
            sale.company
          );
        }}
        classes={{ root: classes.listItem }}
      >
        <SaleCardItem
          title={sale.title}
          dateEnd={sale.dateEnd}
          imgSrc={sale.image}
          company={sale.company}
          dateStart={sale.dateStart}
          description={sale.description}
          category={sale.category === null ? "Καμία" : sale.category}
        />
      </ListItem>
    );
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <ListWithPagination
              data={sales}
              listItem={listBody}
              searchKeys={["title"]}
            />
          </Container>
        </Grid>
      </Grid>
      <CustomDialog
        open={dialogConfig.open}
        onClose={handleCloseDialog}
        title={dialogConfig.title}
        image={dialogConfig.image}
        description={dialogConfig.description}
        salesCompany={dialogConfig.salesCompany}
      />
    </>
  );
}

export default CompanySales;
