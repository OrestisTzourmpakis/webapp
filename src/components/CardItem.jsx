import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    cursor: "pointer",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardImageBox: {
    height: "100%",
    marginRight: "30px",
    "& img": {
      borderRadius: "50%",
      width: "80px",
    },
  },
  cardContent: {
    backgroundColor: "#f7f8fc",
  },
}));

function CardItem({
  logo,
  name,
  website,
  twitter,
  instagram,
  facebook,
  companySalesCount,
  companyUsersCount,
  companyStoresCount,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar src={logo} />} title={name}></CardHeader>
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item xs={6}>
            <Grid container alignItems="center" direction="column">
              <Typography variant="h5">{companySalesCount}</Typography>
              <Typography variant="subtitle1">Προσφορές</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container alignItems="center" direction="column">
              <Typography variant="h5">{companyStoresCount}</Typography>
              <Typography variant="subtitle1">Υποκαταστήματα</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardItem;
