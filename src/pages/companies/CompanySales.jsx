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
import { SignalCellularNoSimSharp } from "@material-ui/icons";
import OffersList from "../../components/OffersList";
import { salesData } from "../../services/dummyData";

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
  useEffect(() => {
    const Init = async () => {
      try {
        const data = salesData();
        setSales(data);
      } catch (ex) {}
    };
    Init();
  }, []);

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
