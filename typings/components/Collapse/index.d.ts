import { CollapseProps } from './Collapse';
import { PanelProps } from './Panel';
import * as React from 'react';
export declare type ICollapseComponent = React.FC<CollapseProps> & {
    Panel: React.FC<PanelProps>;
};
declare const TransCollapse: ICollapseComponent;
export default TransCollapse;
