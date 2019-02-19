import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiBadgeProps extends StandardProps<ButtonProps, CuiBadgeClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiBadgeClassKey = "root" | "badge" | "colorPrimary" | "colorSecondary" | "invisible" | "dot";

declare const CuiBadge: React.ComponentType<CuiBadgeProps>;

export default CuiBadge;
