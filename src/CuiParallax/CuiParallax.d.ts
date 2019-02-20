import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiPaginationProps extends StandardProps<CuiPaginationClassKey, "component"> {
  filter: boolean;
  style: string;
  image: string;
}

export type CuiPaginationClassKey = "parallax" | "filter" | "small";

declare const CuiPagination: React.ComponentType<CuiPaginationProps>;

export default CuiPagination;
