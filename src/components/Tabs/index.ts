import Tabs, { TabsProps } from './Tabs';
import TabPane, { TabPaneProps } from './TabPane';
import * as React from 'react'

export type ITabsComponent = React.FC<TabsProps> & {
    TabPane: React.FC<TabPaneProps>,
}
const TransTabs = Tabs as ITabsComponent
TransTabs.TabPane = TabPane
export default TransTabs