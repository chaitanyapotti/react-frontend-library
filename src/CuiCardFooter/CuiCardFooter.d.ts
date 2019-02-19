import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiCardFooterProps extends StandardProps<ButtonProps, CuiCardFooterClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiCardFooterClassKey = "cardFooter";

declare const CuiCardFooter: React.ComponentType<CuiCardFooterProps>;

export default CuiCardFooter;
