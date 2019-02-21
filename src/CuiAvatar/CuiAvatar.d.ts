import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiAvatarProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiAvatarClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiAvatarClassKey = "avatar" | "orangeAvatar" | "purpleAvatar";

declare const CuiAvatar: React.ComponentType<CuiAvatarProps>;

export default CuiAvatar;
