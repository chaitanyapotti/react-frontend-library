import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { withStyles, LinearProgress } from "@material-ui/core";
// core components
import styles from "../styles/ProgressBar";

const CuiProgressBar = ({ ...props }) => {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
};

CuiProgressBar.defaultProps = {};

CuiProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

export default withStyles(styles)(CuiProgressBar);
