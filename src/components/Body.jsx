import { Container, Grid } from "@material-ui/core";
import {
  Accessibility,
  AttachMoney,
  Business,
  Group,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import BodyItem from "./BodyItem";
import {
  getTotalActiveSales,
  getTotalCompanies,
  getTotalUsers,
} from "../services/statisticsService";
import { calculateTotal } from "../utils/totalNumberConfiguration";

function Body() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalActiveSales, setTotalActiveSales] = useState(0);
  const [totalCompanies, setTotalCompanies] = useState(0);
  useEffect(() => {
    const Init = async () => {
      try {
        const { data } = await getTotalUsers();
        setTotalUsers(data);
      } catch (ex) {
        //
      }
      try {
        const { data } = await getTotalActiveSales();
        setTotalActiveSales(data);
      } catch (ex) {
        //
      }
      try {
        const { data } = await getTotalCompanies();
        setTotalCompanies(data);
      } catch (ex) {
        //
      }
    };
    Init();
  }, []);
  return (
    <Container>
      <Grid container spacing={10} style={{ marginTop: "0px" }}>
        <Grid item md={4} xs={12}>
          <BodyItem title={`100+ χρήστες`}>
            <Group style={{ fontSize: "50px" }} />
          </BodyItem>
        </Grid>
        <Grid item md={5} xs={12}>
          <BodyItem title={`90+ καταστήματα`}>
            <Business style={{ fontSize: "50px" }} />
          </BodyItem>
        </Grid>
        <Grid item md={3} xs={12}>
          <BodyItem title={`50+ προσφορές`}>
            <AttachMoney style={{ fontSize: "50px" }} />
          </BodyItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Body;
