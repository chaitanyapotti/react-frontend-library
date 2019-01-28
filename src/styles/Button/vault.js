import { grayColor, primaryColor, infoColor, successColor, warningColor, dangerColor, roseColor } from "../common";
import { withStyles } from "@material-ui/core";

const vault = {
  button: {
    color: "#3d3d3d",
    borderRadius: "50px",
    height: "45px",
    border: "none",
    backgroundColor: infoColor
  },
  label: {
    fontSize: "35px"
  }
};

export default withStyles(vault);
