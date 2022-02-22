import { Container, Grid } from "@material-ui/core";
import {
  Accessibility,
  EuroSymbol,
  Face,
  Redeem,
  ShoppingCart,
} from "@material-ui/icons";
import React from "react";
import BodyHowToItem from "./BodyHowToItem";

function BodyHowTo() {
  return (
    <>
      <Container>
        <Grid container spacing={8}>
          <Grid item md={4} lg={3} xs={12}>
            <BodyHowToItem
              Icon={<Face style={{ color: "#302b27", fontSize: "50px" }} />}
              title="Create Account"
              body="Create an account in order to gain access to all our services."
            />
          </Grid>
          <Grid item md={4} lg={3} xs={12}>
            <BodyHowToItem
              Icon={<ShoppingCart style={{ fontSize: "50px" }} />}
              title="Buy products"
              body="Buy products from our already registered companies."
            />
          </Grid>
          <Grid item md={4} lg={3} xs={12}>
            <BodyHowToItem
              Icon={<EuroSymbol style={{ fontSize: "50px" }} />}
              title="Earn points"
              body="After every transcation you will earn some points depend on the corresponding company policy."
            />
          </Grid>
          <Grid item md={4} lg={3} xs={12}>
            <BodyHowToItem
              Icon={<Redeem style={{ fontSize: "50px" }} />}
              title="Redeem points"
              body="Redeem your points and get some exciting rewards!"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BodyHowTo;
