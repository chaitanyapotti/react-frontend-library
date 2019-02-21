import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import styles from "../styles/Chips";

function CuiChips(props) {
  const { classes, label, ...other } = props;
  return (
    <div className={classes.root}>
      <Chip label={label} className={classes.chip} {...other} />
    </div>
  );
}

CuiChips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiChips);
