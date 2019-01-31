import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { TableProps } from "@material-ui/core/Table/index";

export interface CuiTablesProps extends StandardProps<TableProps, CuiTablesClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault" | "tim";
}

export type CuiTablesClassKey = "material" | "semantic" | "vault" | "tim";

declare const CuiTables: React.ComponentType<CuiTablesProps>;

export default CuiTables;
