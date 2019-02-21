import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiBadgeProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiBadgeClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiBadgeClassKey = "root" | "badge" | "colorPrimary" | "colorSecondary" | "invisible" | "dot";

declare const CuiBadge: React.ComponentType<CuiBadgeProps>;

export default CuiBadge;
