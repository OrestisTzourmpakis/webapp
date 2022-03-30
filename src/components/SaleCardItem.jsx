import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Button,
  Avatar,
} from "@material-ui/core";
import { ArrowForward, Business, Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { dateConfiguration } from "../utils/dateConfiguration";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: "10px",
  },
  paperContent: {
    padding: "10px",
    "&:last-child": {
      padding: "10px",
    },
  },
  companyName: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  textFont: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

function SaleCardItem({
  title,
  description,
  company,
  dateEnd,
  allSales,
  dateStart,
  imgSrc,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Paper className={classes.paperWrapper}>
      
        <Grid container className={classes.cardWrapper}>
          
        {imgSrc ? (
        <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={2}
          >
            <img src={imgSrc} style={{ width: "100%" }} />
          </Grid>
        ) :""
        }
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={7}
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}


          >
            <div style={{ textOverflow: "ellipsis", overflow: "hidden",padding:"5px" }}>
            {allSales && (
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                startIcon={<Business />}
                onClick={() => navigate(`/companies/${company.id}`)}
              >
                <Typography className={classes.companyName} variant="subtitle2">
                  {company?.name}
                </Typography>
              </Button>
            </Grid>
          )}
              <Typography
                variant="h6"
                style={{ textOverflow: "ellipsis", overflow: "hidden" }}
                className={classes.textFont}
              >
                <b>{title}</b>
              </Typography>
              <Typography
                variant="body1"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                className={classes.textFont}
              >
                <i>{description}</i>
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={3}
          >
            <div style={{textAlign:"center",margin:"auto"}}>
            
            <Typography variant="h6" className={classes.textFont}>
            Διάρκεια:
            </Typography>
            <Typography variant="body1" className={classes.textFont}>
              {dateConfiguration(dateStart)} - {dateConfiguration(dateEnd)}
            </Typography>
            </div>
          </Grid>

          <Grid xs item container alignItems="center" justifyContent="flex-end">
            <ArrowForward />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default SaleCardItem;
