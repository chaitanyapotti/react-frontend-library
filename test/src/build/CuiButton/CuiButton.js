"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("../styles/Button"));

// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js
var customStyle = "";

var CuiButton = function CuiButton(props) {
  var children = props.children,
      classes = props.classes,
      muiClasses = props.muiClasses,
      classNameProp = props.className,
      themeEngine = props.themeEngine,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "muiClasses", "className", "themeEngine"]);
  customStyle = _Button.default[themeEngine];
  console.log("sasass", customStyle);
  var className = (0, _classnames.default)(classNameProp, classes.button);
  return _react.default.createElement(_core.Button, (0, _extends2.default)({
    className: className
  }, other, {
    classes: muiClasses
  }), children);
};

CuiButton.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The theme engine of the component. It supports those theme engines that make sense for this component.
   * Default theme is material
   */
  themeEngine: _propTypes.default.oneOf(["material", "semantic", "vault"]),
  muiClasses: _propTypes.default.object
};
CuiButton.defaultProps = {
  themeEngine: "material"
}; // console.log("slsasa", styles.themeEngine, styles);

var _default = (0, _core.withStyles)(customStyle)(CuiButton);

exports.default = _default;