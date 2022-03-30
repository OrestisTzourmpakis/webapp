import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Business } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { getUserPoints } from "../../services/pointsService";
import { dateConfiguration } from "../../utils/dateConfiguration";

const useStyles = makeStyles((them) => ({
  listItem: {
    backgroundColor: "#e8e9ec",
    margin: "5px",
  },
}));

function PointsContent({ data, title, history }) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container >
      <Grid container >
        <Grid
          item
          container
          style={{ marginBottom: "10px" }}
          xs={12}
          justifyContent="center"
        >
          <Typography align="center" variant="h5">
            <b>{title}</b>
          </Typography>
        </Grid>
        <Grid item container >
          <Container style={{padding:"0px",margin:"0px"}}>
            {data?.length > 0 ? (
              <List>
                {data?.map((elem) => (
                  <ListItem key={elem.id} className={classes.listItem}  style={{padding:"0px",marginTop:"0px"}}>
                    {/* <ListItemText>
                      <Typography variant="body">
                        {elem?.company?.name}
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <Typography variant="h5">{elem?.total}</Typography>
                    </ListItemSecondaryAction> */}
                    <Box
                      style={{ width: "100%"}}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      

                    >
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Business />}
                        style={{textAlign:"left",marginRight:"20px"}}
                        onClick={() =>
                          navigate(`/companies/${elem?.company?.id}`)
                        }
                      >
                        {elem?.company?.name}
                      </Button>

                      {history ? (
                        <>
                          <Typography variant="body">
                            {dateConfiguration(elem?.transactionDate)}
                          </Typography>
                          <Typography variant="h5">
                            {elem?.transaction}
                          </Typography>
                        </>
                      ) : (
                        <Typography variant="h5">{elem?.total}</Typography>
                      )}
                    </Box>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography align="center" variant="body1">
                No Results
              </Typography>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PointsContent;
