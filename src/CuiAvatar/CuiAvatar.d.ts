import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { AvatarProps } from "@material-ui/core/Avatar/index";

export interface CuiAvatarProps extends StandardProps<AvatarProps, CuiAvatarClassKey, "component"> {}

export type CuiAvatarClassKey = "avatar" | "orangeAvatar" | "purpleAvatar";

declare const CuiAvatar: React.ComponentType<CuiAvatarProps>;

export default CuiAvatar;
