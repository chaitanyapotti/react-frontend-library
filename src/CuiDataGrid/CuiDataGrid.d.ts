import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiDataGridProps extends StandardProps<CuiDataGridClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault" | "tim";
}

export type CuiDataGridClassKey = "material" | "semantic" | "vault" | "tim";

declare const CuiDataGrid: React.ComponentType<CuiDataGridProps>;

export default CuiDataGrid;
