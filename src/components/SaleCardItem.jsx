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
      fontSize: "5px",
    },
  },
  textFont: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
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
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={2}
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {imgSrc ? (
              <img src={imgSrc} style={{ height: "30px", width: "30px" }} />
            ) : (
              <Avatar style={{ height: "30px", width: "30px" }} />
            )}
          </Grid>
          {allSales && (
            <Grid item xs={3} justifyContent="flex-end" alignItems="center">
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
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={2}
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            <Typography
              variant="h6"
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              className={classes.textFont}
            >
              <b>{title}</b>
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={3}
          >
            <Typography variant="body1" className={classes.textFont}>
              {dateConfiguration(dateStart)} - {dateConfiguration(dateEnd)}
            </Typography>
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
