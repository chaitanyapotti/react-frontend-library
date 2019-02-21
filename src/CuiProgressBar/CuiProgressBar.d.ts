import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiProgressBarProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiProgressBarClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiProgressBarClassKey = "root" | "bar";

declare const CuiProgressBar: React.ComponentType<CuiProgressBarProps>;

export default CuiProgressBar;
