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
export { default as CuiGrid } from "./CuiGrid";
export { default as CuiRow } from "./CuiRow";
export { default as CuiCol } from "./CuiCol";
export { default as CuiTransactionButton } from "./CuiTransactionButton";
export { default as CuiMasonaryLayout } from "./CuiMasonaryLayout";
export { default as CuiInput } from "./CuiInput";
export { default as CuiUploadButton } from "./CuiUploadButton";
export { default as CuiTooltip } from "./CuiTooltip";
export { default as CuiTabs } from "./CuiTabs";
export { default as CuiProgressBar } from "./CuiProgressBar";
export { default as CuiChips } from "./CuiChips";
export { default as CuiAvatar } from "./CuiAvatar";
export { default as CuiExpansionPanel } from "./CuiExpansionPanel";
export { default as CuiDivider } from "./CuiDivider";
export { default as CuiModal } from "./CuiModal";
export { default as CuiStepper } from "./CuiStepper";
export { default as CuiRadioButton } from "./CuiRadioButton";
export { default as CuiCheckbox } from "./CuiCheckbox";
export { default as CuiHeader } from "./CuiHeader";
