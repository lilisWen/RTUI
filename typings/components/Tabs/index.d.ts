import { TabsProps } from './Tabs';
import { TabPaneProps } from './TabPane';
import * as React from 'react';
export declare type ITabsComponent = React.FC<TabsProps> & {
    TabPane: React.FC<TabPaneProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
