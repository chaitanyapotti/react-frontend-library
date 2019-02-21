import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiTabsProps extends StandardProps<ButtonProps, CuiTabsClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiTabsClassKey = "tabRootButton" | "tabSelected";

declare const CuiTabs: React.ComponentType<CuiTabsProps>;
