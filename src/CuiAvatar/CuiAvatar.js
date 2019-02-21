import React from "react";
import PropTypes from "prop-types";
import { withStyles, Avatar } from "@material-ui/core";
import styles from "../styles/Avatar";

const CuiAvatar = props => {
  const { classes, children, ...other } = props;
  return (
    <Avatar className={classes.avatar} {...other}>
      {children}
    </Avatar>
  );
};

CuiAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiAvatar);
