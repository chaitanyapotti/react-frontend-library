import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import styles from "../styles/Avatar";

function CuiAvatar(props) {
  const { classes, children, ...other } = props;
  return (
    <Avatar className={classes.avatar} {...other}>
      {children}
    </Avatar>
  );
}

CuiAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiAvatar);
