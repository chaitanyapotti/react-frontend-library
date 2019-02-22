import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { TooltipProps } from "@material-ui/core/Tooltip/index";

export interface CuiTooltipProps extends StandardProps<TooltipProps, CuiTooltipClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiTooltipClassKey = "tooltip";
declare const CuiTooltip: React.ComponentType<CuiTooltipProps>;

export default CuiTooltip;
