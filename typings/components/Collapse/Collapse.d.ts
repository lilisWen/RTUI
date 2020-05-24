import * as React from 'react';
export interface CollapseProps {
    activeKey?: string[];
    defaultActiveKey?: string[];
    accordion?: boolean;
    showArrow?: boolean;
    onChange?: (activeKey: string[], e: React.MouseEvent<HTMLElement>) => any;
    className?: string;
    style?: React.CSSProperties;
}
declare const Collapse: React.FC<CollapseProps>;
export default Collapse;
