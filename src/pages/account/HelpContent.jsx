import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

function HelpContent() {
  return (
    <Container>
      <Grid container>
        <Grid xs={4}></Grid>
        <Grid xs={8}>
          <Typography variant="body">
            If you have any questiong please send us an email
            here:test@email.com
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HelpContent;
