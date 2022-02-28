import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CallMissedSharp, Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";

function CustomDialog({ open, onClose, title, description, image }) {
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
  });

  const classes = useStyles();

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
      </Dialog>
    </>
  );
}

export default CustomDialog;
