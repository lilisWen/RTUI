import Collapse, { CollapseProps } from './Collapse';
import Panel, { PanelProps } from './Panel';
import * as React from 'react'

export type ICollapseComponent = React.FC<CollapseProps> & {
    Panel: React.FC<PanelProps>,
}
const TransCollapse = Collapse as ICollapseComponent
TransCollapse.Panel = Panel
export default TransCollapse