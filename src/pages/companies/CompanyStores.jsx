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
      const arrObj = [];
      const dd = data.map((item) => {
        item.address = item.address + " Leivadia";

        return item;
      });
      console.log(dd);
      setStores(dd);
    };
    Init();
  }, [company]);

  useEffect(() => {
    let arrObj = [];
    const Init = async () => {
      let i = 0;
      let arr = [];
      while (i <= stores.length - 1) {
        var resposne = await Geocode.fromAddress(stores[i].address);
        console.log(resposne);
        let { lat, lng } = resposne.results[0].geometry.location;
        let store = {
          address: stores[i].address,
          lat,
          lng,
        };
        arr = [...arr, store];
        i++;
      }
      setCompanyMarkers(arr);
      console.log(arr);
      // if (stores) {
      //   setCompanyMarkers(async (value) =>
      //     stores.map(async (store) => {
      //       let response = Geocode.fromAddress(store.address).then(
      //         (resp) => {
      //           const { lat, lng } = resp.results[0].geometry.location;
      //           setCompanyMarkers([
      //             ...companyMarkers,
      //             { address: store.address, lat, lng },
      //           ]);
      //         },
      //         (error) => console.log(error)
      //       );
      //       return store;
      //     })
      //   );
      // }
    };
    Init();
    console.log("To telos:", arrObj);
  }, [stores]);

  return (
    <>
      <GoogleMapContainer stores={companyMarkers} />=
    </>
  );
}

export default CompanyStores;
