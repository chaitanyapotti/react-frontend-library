// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, Button, CircularProgress } from "@material-ui/core";
import styles from "../styles/LoadingButton";

const SpinnerAdornment = withStyles(styles)(props => <CircularProgress className={props.classes.spinner} size={20} />);

const CuiLoadingButton = props => {
  const {
    children,
    loading,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    color,
    round,
    classes,
    className: classNameProp,
    themeEngine,
    ...other
  } = props;
  const customStyle = classes;
  const className = classNames(classNameProp, [customStyle[`${themeEngine}button`]], {
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
  return (
    <Button className={className} {...other}>
      {children}
      {loading && <SpinnerAdornment />}
    </Button>
  );
};

CuiLoadingButton.propTypes = {
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
  color: PropTypes.oneOf(["primary", "vault", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: PropTypes.oneOf(["sm", "lg"])
};

CuiLoadingButton.defaultProps = {
  themeEngine: "material",
  loading: true
};

export default withStyles(styles)(CuiLoadingButton);
