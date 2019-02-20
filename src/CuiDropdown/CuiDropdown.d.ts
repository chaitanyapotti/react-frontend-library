import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiDropdownProps extends StandardProps<ButtonProps, CuiDropdownClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiDropdownClassKey = "popperClose" | "dropdown" | "menuList" | "pooperResponsive" | "dropdownItem" | "caret" | "dropdownHeader";

declare const CuiDropdown: React.ComponentType<CuiDropdownProps>;

export default CuiDropdown;
