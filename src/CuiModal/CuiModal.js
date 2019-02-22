import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class CuiModal extends React.Component {
  render() {
    const { open, handleClose, title, children, btn1, btn2, btnColor, handleAction } = this.props || {};
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{children}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color={btnColor}>
              {btn1}
            </Button>
            <Button onClick={handleAction} color={btnColor} autoFocus>
              {btn2}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CuiModal;
