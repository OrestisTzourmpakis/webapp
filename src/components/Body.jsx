import { Container, Grid } from "@material-ui/core";
import {
  Accessibility,
  AttachMoney,
  Business,
  Group,
} from "@material-ui/icons";
import React from "react";
import BodyItem from "./BodyItem";

function Body() {
  return (
    <Container>
      <Grid container spacing={10} style={{ marginTop: "0px" }}>
        <Grid item md={4} xs={12}>
          <BodyItem title="5000+ registered users">
            <Group style={{ fontSize: "50px" }} />
          </BodyItem>
        </Grid>
        <Grid item md={4} xs={12}>
          <BodyItem title="Over 100+ companies">
            <Business style={{ fontSize: "50px" }} />
          </BodyItem>
        </Grid>
        <Grid item md={4} xs={12}>
          <BodyItem title="10000+ Active Sales">
            <AttachMoney style={{ fontSize: "50px" }} />
          </BodyItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Body;
