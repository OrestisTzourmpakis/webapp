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
          <Grid item md={4} lg={4} xs={12}>
            <BodyHowToItem
              Icon={<ShoppingCart style={{ fontSize: "50px" }} />}
              title="Αγοράστε Προϊόντα"
              body="Αγοράστε προϊόντα από τα εγγεγραμμένα καταστήματα μας."
            />
          </Grid>
          <Grid item md={4} lg={4} xs={12}>
            <BodyHowToItem
              Icon={<EuroSymbol style={{ fontSize: "50px" }} />}
              title="Κερδίστε Πόντους"
              body="Μετά από κάθε συναλλαγή θα κερδίζετε πόντους ανάλογα με την αντίστοιχη πολιτική της επιχείρησης."
            />
          </Grid>
          <Grid item md={4} lg={4} xs={12}>
            <BodyHowToItem
              Icon={<Redeem style={{ fontSize: "50px" }} />}
              title="Εξαργυρώστε Πόντους"
              body="Εξαργυρώστε τους πόντους σας και κερδίστε οικονομικότερες αγορές!"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BodyHowTo;
