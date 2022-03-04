import { Box, Container, Grid, ListItem, makeStyles } from "@material-ui/core";
import { Loyalty } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../components/CustomDialog";
import ListWithPagination from "../../components/ListWithPagination";
import PageHeader from "../../components/PageHeader";
import SaleCardItem from "../../components/SaleCardItem";
import config from "../../config.json";
import { TabContext } from "../../contexts/TabContext";
import { getAllActiveSales } from "../../services/salesService";

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
function Offers() {
  const { changeTab } = useContext(TabContext);
  const [offers, setOffers] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: "",
    description: "",
    image: null,
  });
  const handleListClick = (title, description, image) => {
    setDialogConfig({ ...dialogConfig, title, description, image, open: true });
  };

  const handleCloseDialog = () => {
    setDialogConfig({ ...dialogConfig, open: false });
  };
  const listBody = (sale) => {
    console.log(sale);
    return (
      <ListItem
        button
        key={sale.id}
        onClick={() =>
          handleListClick(sale.title, sale.description, sale.image)
        }
        classes={{ root: classes.root }}
      >
        <SaleCardItem
          title={sale.title}
          dateEnd={sale.dateEnd}
          allSales={true}
          imgSrc={sale.image}
          company={sale.company}
          dateStart={sale.dateStart}
        />
      </ListItem>
    );
  };

  useEffect(() => {
    changeTab(config.tabs.Offers);
  }, []);

  useEffect(() => {
    const Init = async () => {
      try {
        const { data } = await getAllActiveSales();
        setOffers(data);
      } catch (ex) {
        console.log(ex);
      }
    };
    Init();
  }, []);
  return (
    <>
      <Container style={{ paddingTop: "50px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Box
                display="flex"
                flexDirection="column"
                style={{ marginBottom: "50px" }}
              >
                <PageHeader title="Offers" subTitle="List of all active offers">
                  <Loyalty fontSize="large" />
                </PageHeader>
                <ListWithPagination
                  data={offers}
                  listItem={listBody}
                  searchKeys={["title", "company.name"]}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
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

export default Offers;
