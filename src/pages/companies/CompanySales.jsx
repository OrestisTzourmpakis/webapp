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
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: "",
    description: "",
  });
  useEffect(() => {
    console.log("Company Sales");
  }, []);
  const classes = useStyles();
  const handleListClick = (title, description) => {
    setDialogConfig({ ...dialogConfig, title, description, open: true });
  };

  const descTest =
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus \
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor \
  auctor.";

  const handleClose = () => {
    setDialogConfig({ ...dialogConfig, open: false });
  };

  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Container maxWidth="md">
            <List>
              <ListItem
                onClick={() => handleListClick("Title", "Description")}
                classes={{ root: classes.root }}
              >
                <SaleCardItem />
              </ListItem>
              <ListItem
                onClick={() => handleListClick("Titddddle", descTest)}
                classes={{ root: classes.root }}
              >
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
              <ListItem classes={{ root: classes.root }}>
                <CardItem />
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>
      <CustomDialog
        open={dialogConfig.open}
        onClose={handleClose}
        title={dialogConfig.title}
        description={dialogConfig.description}
      />
    </>
  );
}

export default CompanySales;
