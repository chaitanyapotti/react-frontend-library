// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, Card } from "@material-ui/core";
import styles from "../styles/Card";

const CuiCard = props => {
  const { children, classes, plain, profile, chart, className: classNameProp, themeEngine, ...other } = props;
  const className = classNames(classNameProp, [classes[`${themeEngine}Card`]], {
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart
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
  themeEngine: PropTypes.oneOf(["material", "semantic", "vault", "tim"])
};

CuiCard.defaultProps = {
  themeEngine: "material"
};

export default withStyles(styles)(CuiCard);
