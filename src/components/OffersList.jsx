import { Container, Grid, List, ListItem, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import CardItem from "./CardItem";
import CustomDialog from "./CustomDialog";
import SaleCardItem from "./SaleCardItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    cursor: "pointer",
  },
}));

function OffersList({ sales }) {
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: "",
    description: "",
    image: null,
  });
  const classes = useStyles();
  const handleListClick = (title, description, image) => {
    setDialogConfig({ ...dialogConfig, title, description, image, open: true });
  };

  const handleCloseDialog = () => {
    setDialogConfig({ ...dialogConfig, open: false });
  };
  return (
    <>
      <List component="nav">
        {sales.map((sale) => (
          <ListItem
            button
            key={sale.id}
            onClick={() =>
              handleListClick(sale.title, sale.description, sale.image)
            }
            classes={{ root: classes.root }}
          >
            <SaleCardItem title={sale.title} dateEnd={sale.dateEnd} />
          </ListItem>
        ))}
      </List>
      <CustomDialog
        open={dialogConfig.open}
        onClose={handleCloseDialog}
        title={dialogConfig.title}
        image={dialogConfig.image}
        description={dialogConfig.description}
      />
    </>
  );
}

export default OffersList;
