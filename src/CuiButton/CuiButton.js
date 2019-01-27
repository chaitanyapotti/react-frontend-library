// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, Button } from "@material-ui/core";
import styles from "../styles/Button";

let customStyle = "";

const CuiButton = props => {
  const { children, classes, muiClasses, className: classNameProp, themeEngine, ...other } = props;
  customStyle = styles[themeEngine];
  console.log("sasass", customStyle);
  const className = classNames(classNameProp, customStyle.button);
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
  themeEngine: PropTypes.oneOf(["material", "semantic", "vault"]),
  muiClasses: PropTypes.object
};

CuiButton.defaultProps = {
  themeEngine: "material"
};
// console.log("slsasa", styles.themeEngine, styles);
export default withStyles(customStyle)(CuiButton);
