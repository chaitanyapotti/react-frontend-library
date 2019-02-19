import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiCardHeaderProps extends StandardProps<ButtonProps, CuiCardHeaderClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiCardHeaderClassKey = "cardHeader";
declare const CuiCardHeader: React.ComponentType<CuiCardHeaderProps>;

export default CuiCardHeader;
