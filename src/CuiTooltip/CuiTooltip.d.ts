import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiTooltipProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiTooltipClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiTooltipClassKey = "tooltip";
declare const CuiTooltip: React.ComponentType<CuiTooltipProps>;

export default CuiTooltip;
