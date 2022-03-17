import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { CallMissedSharp, Close, Business } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomDialog({ open, onClose, title, description, image, salesCompany }) {
  const useStyles = makeStyles((theme) => ({
    dialogImage: {
      margin: "10px",
      maxWidth: "100%",
      maxHeight: "200px",
      borderRadius: "15px",
    },
  }));

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    companyName: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "5px"
      },
    }
  });

  const classes = useStyles();
  const navigate = useNavigate();

  const CustomDialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <DialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6" style={{ marginRight: "50px" }}>
          {children}
        </Typography>
        {onClose ? (
          <IconButton className={classes.closeButton} onClick={onClose}>
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  });

  return (
    <>
      <Dialog onClose={onClose} open={open}>
        <CustomDialogTitle id="title" onClose={onClose}>
          {title}
        </CustomDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{description}</Typography>
          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>

        {image !== null && <img className={classes.dialogImage} src={image} />}
        <Button
                size="small"
                variant="outlined"
                color="primary"
                style={{backgroundColor:"#3f51b5",color:"white",padding:"20px"}}
                startIcon={<Business />}
                onClick={() => navigate(`/companies/${salesCompany.id}`)}
              >
                <Typography className={classes.companyName} variant="subtitle2">
                  Δειτε τα διαθεσιμα καταστηματα!
                </Typography>
              </Button>
      </Dialog>
    </>
  );
}

export default CustomDialog;
