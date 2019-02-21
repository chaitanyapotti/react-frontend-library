import React from "react";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import stylesButton from "../styles/Button";
import stylesInput from "../styles/Input";

const styles = { ...stylesButton, ...stylesInput };

const CuiUploadButton = props => {
  const { classes, children, ...other } = props;
  return (
    <div>
      <input style={{ display: "none" }} accept="image/*" className={classes.input} id="outlined-button-file" multiple type="file" />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button} {...other}>
          {children}
        </Button>
      </label>
    </div>
  );
};

CuiUploadButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiUploadButton);
