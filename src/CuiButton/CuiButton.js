// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { componentPropType, chainPropTypes } from "@material-ui/utils";
import { withStyles, Button } from "@material-ui/core";

export const styles = theme => ({
  material: {
    color: "#6d6d6d"
  },
  semantic: {
    color: "#4dac3f"
  },
  vault: {
    color: "#3d3d3d"
  }
});

class CuiButton extends Component {
  render() {
    const {
      children,
      classes,
      className: classNameProp,
      color,
      disabled,
      disableFocusRipple,
      fullWidth,
      mini,
      size,
      variant,
      themeEngine,
      ...other
    } = this.props;
    const className = classNames(
      {
        [classes.semantic]: themeEngine === "semantic",
        [classes.vault]: themeEngine === "vault",
        [classes.material]: themeEngine === "material"
      },
      classNameProp
    );
    return (
      <Button className={className} disabled={disabled} focusRipple={!disableFocusRipple} {...other}>
        {children}
      </Button>
    );
  }
}

CuiButton.PropTypes = {
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The variant to use.
   * __WARNING__: `flat` and `raised` are deprecated.
   * Instead use `text` and `contained` respectively.
   * `fab` and `extendedFab` are deprecated.
   * Instead use `<Fab>` and `<Fab variant="extended">`
   */
  variant: chainPropTypes(PropTypes.oneOf(["text", "outlined", "contained", "fab", "extendedFab", "flat", "raised"]), props => {
    if (props.variant === "flat") {
      return new Error(
        "Material-UI: the `flat` variant will be removed in the next major release. " + "`text` is equivalent and should be used instead."
      );
    }
    if (props.variant === "raised") {
      return new Error(
        "Material-UI: the `raised` variant will be removed in the next major release. " + "`contained` is equivalent and should be used instead."
      );
    }
    if (props.variant === "fab") {
      return new Error(
        "Material-UI: the `fab` variant will be removed in the next major release. " +
          "The `<Fab>` component is equivalent and should be used instead."
      );
    }
    if (props.variant === "extendedFab") {
      return new Error(
        "Material-UI: the `fab` variant will be removed in the next major release. " +
          'The `<Fab>` component with `variant="extended"` is equivalent ' +
          "and should be used instead."
      );
    }

    return null;
  }),
  /**
   * The theme engine of the component. It supports those theme engines that make sense for this component.
   * Default theme is material
   */
  themeEngine: PropTypes.oneOf(["material", "semantic", "vault"])
};

CuiButton.defaultProps = {
  color: "default",
  component: "button",
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: "medium",
  type: "button",
  variant: "text",
  themeEngine: "material"
};

export default withStyles(styles, { name: "MuiButton" })(CuiButton);
