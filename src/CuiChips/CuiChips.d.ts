import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiChipsProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiChipsClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiChipsClassKey = "root" | "chip";

declare const CuiChips: React.ComponentType<CuiChipsProps>;

export default CuiChips;
