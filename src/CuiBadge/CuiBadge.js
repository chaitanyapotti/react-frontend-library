import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "../styles/Badge";

function CuiBadge({ ...props }) {
  const { classes, color, children } = props;
  return <span className={classes.badge + " " + classes[color]}>{children}</span>;
}

CuiBadge.defaultProps = {
  color: "gray"
};

CuiBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

export default withStyles(styles)(CuiBadge);
