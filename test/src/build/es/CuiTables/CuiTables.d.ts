import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiTablesProps extends StandardProps<ButtonProps, CuiTablesClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault";
}

export type CuiTablesClassKey = "material" | "semantic" | "vault";

declare const CuiTables: React.ComponentType<CuiTablesProps>;

export default CuiTables;
