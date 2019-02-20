import * as React from "react";
import { StyledComponentProps } from "@material-ui/core/styles";
export { StyledComponentProps };

export namespace PropTypes {
  type Alignment = "inherit" | "left" | "center" | "right" | "justify";
  type Color = "inherit" | "primary" | "secondary" | "default";
  type Margin = "none" | "dense" | "normal";
}

export type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<C, "classes" | Removals> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    style?: React.CSSProperties;
  };

export { default as CuiButton } from "./CuiButton";
export { default as CuiLoadingButton } from "./CuiLoadingButton";
export { default as CuiCard } from "./CuiCard";
export { default as CuiTables } from "./CuiTables";
export { default as CuiDataGrid } from "./CuiDataGrid";
export { default as CuiBadge } from "./CuiBadge";
export { default as CuiMaterialBadge } from "./CuiMaterialBadge";
export { default as CuiDropdown } from "./CuiDropdown";
export { default as CuiPagination } from "./CuiPagination";
export { default as CuiSnackbar } from "./CuiSnackbar";
export { default as CuiParallax } from "./CuiParallax";
