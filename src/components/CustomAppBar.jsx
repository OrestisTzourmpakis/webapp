import {
  AppBar,
  Box,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/userService";
import AccountDialog from "./AccountDialog";

const useStyles = makeStyles((theme) => ({
  imgAppBar: {
    width: "100px",
    height: "100px",
  },
}));

function CustomAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [dialogConfig, setDialogConfig] = useState({
    title: "Logout",
    description: "Are you sure you want to logout?",
    confirm: null,
    open: false,
  });

  useEffect(() => {
    setDialogConfig({ ...dialogConfig, confirm: handleConfirm });
  }, []);

  const handleDialog = (value) => {
    setDialogConfig({ ...dialogConfig, open: value });
  };

  const handleConfirm = async () => {
    try {
      const result = await logOut();
      navigate("/login");
    } catch (ex) {}
  };

  const handleLogout = () => {
    setDialogConfig({ ...dialogConfig, open: true });
  };

  const handleChange = (event) => {
    //setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="static"
        style={{ height: "70px", backgroundColor: "white" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          style={{ height: "100%" }}
          alignItems="center"
        >
          <div></div>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            className={classes.imgAppBar}

          />
          <IconButton
            aria-label="account"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </AppBar>
      <AccountDialog
        open={dialogConfig?.open}
        setOpen={handleDialog}
        title={dialogConfig?.title}
        description={dialogConfig?.description}
        handleConfirm={dialogConfig?.confirm}
      />
    </>
  );
}

export default CustomAppBar;
