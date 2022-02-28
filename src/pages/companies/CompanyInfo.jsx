import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useState } from "react";
import { CompanyDetailsContext } from "../../contexts/CompanyDetailsContext";
import { UserContext } from "../../contexts/UserContext";
import {
  getCompanyById,
  getCompanyByUserEmail,
} from "../../services/companyService";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: "20px",
  },
  formControler: {
    margin: "10px",
  },
  mb2: {
    marginBottom: "20px",
  },
}));
// #d4d2d1

function CompanyInfo() {
  const classes = useStyles();
  const { company } = useContext(CompanyDetailsContext);
  const { authed } = useContext(UserContext);
  const [companyModel, setCompanyModel] = useState({
    name: "",
    pointsEuro: 0,
    euroPoints: 0,
  });
  //console.log("Sto company info to companyId:", companyId);
  useEffect(() => {
    const Init = async () => {
      if (company === null) return;
      // call the api
      // const { data } = await getCompanyById(companyId);
      // success get the data of the company!!!
      setCompanyModel({
        pointsEuro: company.pointsToEuroRatio,
        euroPoints: company.euroToPointsRatio,
        facebook: company.facebook,
        instagram: company.instagram,
        twitter: company.twitter,
        website: company.website,
        name: company.name,
      });
      //console.log("Ta data!!!", data);
      console.log("Company Info");
    };
    Init();
  }, [company, authed]);

  return (
    <>
      <Paper className={classes.paperWrapper}>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Box display="flex" flexDirection="column">
              <Grid item container direction="column">
                <Box
                  className={classes.mb2}
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    align="start"
                    variant="body1"
                    style={{ color: "#d4d2d1" }}
                  >
                    Name
                  </Typography>
                  <Typography variant="h6">
                    <b>{companyModel.name}</b>
                  </Typography>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  className={classes.mb2}
                  flexDirection="column"
                >
                  <Typography
                    align="start"
                    variant="body1"
                    style={{ color: "#d4d2d1" }}
                  >
                    Points:Euro
                  </Typography>
                  <Typography variant="h6">
                    <b>{companyModel.pointsEuro}</b>
                  </Typography>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  className={classes.mb2}
                  flexDirection="column"
                >
                  <Typography
                    align="start"
                    variant="body1"
                    style={{ color: "#d4d2d1" }}
                  >
                    Euro:Points
                  </Typography>
                  <Typography variant="h6">
                    <b>{companyModel.euroPoints}</b>
                  </Typography>
                  <Divider />
                </Box>
                {/* Socials */}
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default CompanyInfo;
