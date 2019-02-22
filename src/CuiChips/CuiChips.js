import React from "react";
import PropTypes from "prop-types";
import { withStyles, Chip } from "@material-ui/core";

import styles from "../styles/Chips";

const CuiChips = props => {
  const { classes, label, ...other } = props;
  return (
    <div className={classes.root}>
      <Chip label={label} className={classes.chip} {...other} />
    </div>
  );
};

CuiChips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiChips);
