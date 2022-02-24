import { Dialog } from "@material-ui/core";
import React from "react";
import RegisterForm from "./RegisterForm";

function ModalDialog({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <RegisterForm handleClose={handleClose} />
    </Dialog>
  );
}

export default ModalDialog;
