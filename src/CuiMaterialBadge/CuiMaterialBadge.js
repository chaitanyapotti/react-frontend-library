import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withStyles, Badge } from "@material-ui/core";

import styles from "../styles/MaterialBadge";

const CuiMaterialBadge = props => {
  const { classes, children, className: classNameProp, themeColor, themeEngine, ...other } = props;
  const className = cx(classNameProp, {
    [classes[themeColor]]: themeColor,
    [classes[themeEngine]]: themeEngine
  });
  return (
    <Badge className={className} {...other}>
      {children}
    </Badge>
  );
};

CuiMaterialBadge.defaultProps = {};

CuiMaterialBadge.propTypes = {
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
   * The theme engine of the component. It supports those theme engines that make sense for this component.
   * Default theme is tim
   */
  themeEngine: PropTypes.oneOf(["semantic", "tim", "vault"]),
  /**
   * The color property gives you to flexibilty to add specific color to the component.
   * Based on prop type we are inserting the color
   */
  themeColor: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

export default withStyles(styles)(CuiMaterialBadge);
