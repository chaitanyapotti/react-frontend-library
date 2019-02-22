import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiTabsProps extends StandardProps<CuiTabsClassKey, "component"> {
  headerColor: "warning" | "success" | "danger" | "info" | "primary" | "rose";
  title: string;
  tabs: Array;
  rtlActive: boolean;
  plainTabs: boolean;
}

export type CuiTabsClassKey = "tabRootButton" | "tabSelected";

declare const CuiTabs: React.ComponentType<CuiTabsProps>;
