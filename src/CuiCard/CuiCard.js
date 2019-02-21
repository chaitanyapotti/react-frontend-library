import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withStyles, Card } from "@material-ui/core";

import styles from "../styles/Card";

const CuiCard = props => {
  const { children, classes, plain, profile, chart, className: classNameProp, themeColor, themeEngine, ...other } = props;
  const className = cx(classNameProp, {
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [classes[themeColor]]: themeColor,
    [classes[themeEngine]]: themeEngine
  });
  return (
    <Card className={className} {...other}>
      {children}
    </Card>
  );
};

CuiCard.propTypes = {
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
  themeEngine: PropTypes.oneOf(["semantic", "vault", "tim"]),

  /**
   * The color property gives you to flexibilty to add specific color to the component.
   * Based on prop type we are inserting the color
   */
  themeColor: PropTypes.oneOf(["primary", "vault", "info", "success", "warning", "danger", "rose", "white", "transparent"]),

  plain: PropTypes.bool,

  profile: PropTypes.bool,

  chart: PropTypes.bool
};

CuiCard.defaultProps = {};

export default withStyles(styles)(CuiCard);
