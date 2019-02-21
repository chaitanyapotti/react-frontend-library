import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withStyles } from "@material-ui/core";

import styles from "../styles/Badge";

const CuiBadge = props => {
  const { classes, className: classNameProp, themeColor, themeEngine, children, ...other } = props;
  const className = cx(classNameProp, classes.badge, {
    [classes[themeColor]]: themeColor,
    [classes[themeEngine]]: themeEngine
  });
  return (
    <span className={className} {...other}>
      {children}
    </span>
  );
};

CuiBadge.defaultProps = {};

CuiBadge.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The theme engine of the component. It supports those theme engines that make sense for this component.
   */
  themeEngine: PropTypes.oneOf(["semantic", "vault", "tim"]),
  /**
   * The color property gives you to flexibilty to add specific color to the component.
   * Based on prop type we are inserting the color
   */
  themeColor: PropTypes.oneOf(["primary", "vault", "info", "success", "warning", "danger", "rose", "white", "transparent"])
};

export default withStyles(styles)(CuiBadge);
