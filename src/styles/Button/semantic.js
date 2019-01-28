import { grayColor, primaryColor, infoColor, successColor, warningColor, dangerColor, roseColor } from "../common";
import { withStyles } from "@material-ui/core";

const semantic = {
  button: {
    color: "#3d3d3d",
    borderRadius: "50px",
    height: "45px",
    border: "none",
    backgroundColor: primaryColor
  }
};

export default withStyles(semantic);
