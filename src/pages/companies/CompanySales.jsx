import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
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
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function CompanySales() {
  const [sales, setSales] = useState([]);
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

  useEffect(() => {
    const Init = async () => {
      if (company === null) return;
      const { data } = await getSalesByCompanyId(company.id);
      console.log(data);
      setSales(data);
    };
    Init();
  }, [company]);

  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <OffersList sales={sales} />
        </Grid>
      </Grid>
    </>
  );
}

export default CompanySales;
