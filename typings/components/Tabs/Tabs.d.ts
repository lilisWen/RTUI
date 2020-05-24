import * as React from "react";
export interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (key: string) => any;
    vertical?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
