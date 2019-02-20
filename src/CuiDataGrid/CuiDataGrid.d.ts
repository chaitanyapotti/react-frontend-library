import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { MUIDataTableProps } from "mui-datatables";

export interface CuiDataGridProps extends StandardProps<MUIDataTableProps, CuiDataGridClassKey, "component"> {}

export type CuiDataGridClassKey = "material" | "semantic" | "vault" | "tim";

declare const CuiDataGrid: React.ComponentType<CuiDataGridProps>;

export default CuiDataGrid;
