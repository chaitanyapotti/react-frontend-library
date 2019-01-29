// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, Button } from "@material-ui/core";
import styles from "../styles/Button";

const CuiButton = props => {
  const { color, round, children, disabled, simple, size, block, link, justIcon, classes, className: classNameProp, themeEngine, ...other } = props;

  const customStyle = classes;
  const className = classNames(classNameProp, [customStyle[`${themeEngine}button`]], {
    [classes.label]: themeEngine === "vault",
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  const muiClasses = {
    root: classes.root,
    label: classes.label,
    fullWidth: classes.fullWidth,
    variant: classes.variant,
    href: classes.href,
    disableRipple: classes.disableRipple,
    disableFocusRipple: classes.disableFocusRipple
  };
  return (
    <Button className={className} {...other} classes={muiClasses}>
      {children}
    </Button>
  );
};

CuiButton.propTypes = {
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
   * Default theme is material
   */
  themeEngine: PropTypes.oneOf(["material", "semantic", "vault", "tim"]),
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: PropTypes.oneOf(["sm", "lg"])
};

CuiButton.defaultProps = {
  themeEngine: "material"
};
export default withStyles(styles)(CuiButton);
