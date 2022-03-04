import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import GoogleMapContainer from "../../components/GoogleMap";
import { CompanyDetailsContext } from "../../contexts/CompanyDetailsContext";
import { getStoresByCompanyId } from "../../services/storesService";
import Geocode from "react-geocode";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function CompanyStores() {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const classes = useStyles();
  const { company } = useContext(CompanyDetailsContext);
  const [stores, setStores] = useState([]);
  const [companyMarkers, setCompanyMarkers] = useState([]);
  useEffect(() => {
    const Init = async () => {
      if (company === null) return;
      const { data } = await getStoresByCompanyId(company?.id);
      setCompanyMarkers(data);
    };
    Init();
  }, [company]);

  return (
    <>
      <GoogleMapContainer stores={companyMarkers} />=
    </>
  );
}

export default CompanyStores;
