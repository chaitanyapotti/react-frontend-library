import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiPaginationProps extends StandardProps<CuiPaginationClassKey, "component"> {
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
  pages: Array;
}

export type CuiPaginationClassKey = "pagination" | "paginationItem" | "paginationLink";

declare const CuiPagination: React.ComponentType<CuiPaginationProps>;

export default CuiPagination;
