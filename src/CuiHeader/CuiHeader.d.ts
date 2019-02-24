import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { AppBarProps } from "@material-ui/core/AppBar/index";

export interface CuiHeaderProps extends StandardProps<AppBarProps, CuiHeaderClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiHeaderClassKey = "appBar" | "absolute" | "fixed" | "container" | "title";

declare const CuiHeader: React.ComponentType<CuiHeaderProps>;

export default CuiHeader;
