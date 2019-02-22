import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiExpansionPanelProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiExpansionPanelClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiExpansionPanelClassKey = "root" | "heading";

declare const CuiExpansionPanel: React.ComponentType<CuiExpansionPanelProps>;

export default CuiExpansionPanel;
