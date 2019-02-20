// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withStyles, Button } from "@material-ui/core";
import styles from "../styles/Button";

const CuiButton = props => {
  const { themeColor, round, children, disabled, simple, link, justIcon, block, classes, className: classNameProp, themeEngine, ...other } = props;

  const className = cx(classNameProp, {
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.block]: block,
    [classes[themeColor]]: themeColor,
    [classes[themeEngine]]: themeEngine
  });
  return (
    <Button className={className} {...other}>
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
   */
  themeEngine: PropTypes.oneOf(["semantic", "vault", "tim"]),
  /**
   * The color property gives you to flexibilty to add specific color to the component.
   * Based on prop type we are inserting the color
   */
  themeColor: PropTypes.oneOf(["primary", "vault", "info", "success", "warning", "danger", "rose", "white", "transparent"]),

  round: PropTypes.bool,

  disabled: PropTypes.bool,

  simple: PropTypes.bool,

  link: PropTypes.bool,

  justIcon: PropTypes.bool,

  block: PropTypes.bool
};

CuiButton.defaultProps = {};

export default withStyles(styles)(CuiButton);
