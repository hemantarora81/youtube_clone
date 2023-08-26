import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar, IconButton } from "@material-ui/core";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function AlertDialog({ user }) {
  console.log(user);
  const [open, setOpen] = React.useState(false);
  const logout = () => {
    signOut(auth);
    return;
    // setalert({
    //   open: true,
    //   type: "success",
    //   message: "Logout Sucessfull !",
    // });
    // toggleDrawer();
  };

  const handleClickOpen = () => {
    setOpen(true);
    return;
  };
  console.log(handleClickOpen);

  const handleClose = () => {
    // console.log("Closing dialog...");
    setOpen(false);
  };
  console.log(handleClose);

  return (
    <div>
      <Avatar
        style={{
          cursor: "pointer",
          height: 38,
          width: 38,
          backgroundColor: "#000",
        }}
        src={user.photoURL}
        alt={user.displayName || user.email}
        onClick={handleClickOpen}
      />

      <Dialog
        fullWidth
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={logout} autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
