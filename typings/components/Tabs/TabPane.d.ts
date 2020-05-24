import * as React from "react";
export interface TabPaneProps {
    title: string | React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const TabPane: React.FC<TabPaneProps>;
export default TabPane;
