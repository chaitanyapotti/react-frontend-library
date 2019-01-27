"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLink = exports.cardSubtitle = exports.cardTitle = exports.title = exports.defaultBoxShadow = exports.cardHeader = exports.cardActions = exports.roseCardHeader = exports.primaryCardHeader = exports.infoCardHeader = exports.dangerCardHeader = exports.successCardHeader = exports.warningCardHeader = exports.roseBoxShadow = exports.dangerBoxShadow = exports.warningBoxShadow = exports.successBoxShadow = exports.infoBoxShadow = exports.primaryBoxShadow = exports.grayColor = exports.roseColor = exports.infoColor = exports.successColor = exports.dangerColor = exports.warningColor = exports.primaryColor = exports.defaultFont = exports.card = exports.boxShadow = exports.container = exports.transition = exports.drawerWidth = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
var drawerWidth = 260;
exports.drawerWidth = drawerWidth;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
exports.transition = transition;
var container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
exports.container = container;
var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
exports.boxShadow = boxShadow;
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
exports.card = card;
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
exports.defaultFont = defaultFont;
var primaryColor = "#9c27b0";
exports.primaryColor = primaryColor;
var warningColor = "#ff9800";
exports.warningColor = warningColor;
var dangerColor = "#f44336";
exports.dangerColor = dangerColor;
var successColor = "#4caf50";
exports.successColor = successColor;
var infoColor = "#00acc1";
exports.infoColor = infoColor;
var roseColor = "#e91e63";
exports.roseColor = roseColor;
var grayColor = "#999999";
exports.grayColor = grayColor;
var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
exports.primaryBoxShadow = primaryBoxShadow;
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
exports.infoBoxShadow = infoBoxShadow;
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
exports.successBoxShadow = successBoxShadow;
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
exports.warningBoxShadow = warningBoxShadow;
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
exports.dangerBoxShadow = dangerBoxShadow;
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};
exports.roseBoxShadow = roseBoxShadow;
var warningCardHeader = (0, _extends2.default)({
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);
exports.warningCardHeader = warningCardHeader;
var successCardHeader = (0, _extends2.default)({
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);
exports.successCardHeader = successCardHeader;
var dangerCardHeader = (0, _extends2.default)({
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);
exports.dangerCardHeader = dangerCardHeader;
var infoCardHeader = (0, _extends2.default)({
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);
exports.infoCardHeader = infoCardHeader;
var primaryCardHeader = (0, _extends2.default)({
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);
exports.primaryCardHeader = primaryCardHeader;
var roseCardHeader = (0, _extends2.default)({
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);
exports.roseCardHeader = roseCardHeader;
var cardActions = (0, _extends2.default)({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);
exports.cardActions = cardActions;
var cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
exports.cardHeader = cardHeader;
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
exports.defaultBoxShadow = defaultBoxShadow;
var title = {
  color: "#3C4858",
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: "#777",
    fontWeight: "400",
    lineHeight: "1"
  }
};
exports.title = title;
var cardTitle = (0, _extends2.default)({}, title, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": (0, _extends2.default)({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});
exports.cardTitle = cardTitle;
var cardSubtitle = {
  marginTop: "-.375rem"
};
exports.cardSubtitle = cardSubtitle;
var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
exports.cardLink = cardLink;