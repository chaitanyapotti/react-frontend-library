import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "../styles/Button";

function CuiUploadButton(props) {
  const { classes, children } = props;
  return (
    <div>
      <input style={{ display: "none" }} accept="image/*" className={classes.input} id="outlined-button-file" multiple type="file" />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          {children}
        </Button>
      </label>
    </div>
  );
}

CuiUploadButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiUploadButton);
