"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.customStyles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js
var customStyles = {
  material: {
    color: "#6d6d6d"
  },
  semantic: {
    color: "#4dac3f"
  },
  vault: {
    color: "#3d3d3d"
  }
};
exports.customStyles = customStyles;

var CuiButton = function CuiButton(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      themeEngine = props.themeEngine,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "themeEngine"]);
  var className = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.semantic, themeEngine === "semantic"), (0, _defineProperty2.default)(_classNames, classes.vault, themeEngine === "vault"), (0, _defineProperty2.default)(_classNames, classes.material, themeEngine === "material"), _classNames), classNameProp);
  return _react.default.createElement(_core.Button, (0, _extends2.default)({
    className: className
  }, other), children);
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
  themeEngine: _propTypes.default.oneOf(["material", "semantic", "vault"])
};
CuiButton.defaultProps = {
  themeEngine: "material"
};

var _default = (0, _core.withStyles)(customStyles)(CuiButton);

exports.default = _default;