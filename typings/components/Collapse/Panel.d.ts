import * as React from 'react';
export interface PanelProps {
    header: string | React.ReactNode;
    uniqueKey?: string;
    disabled?: boolean;
    showArrow?: boolean;
    derivedActiveKey?: string[];
    onClick?: (key: string, e: React.MouseEvent<HTMLElement>) => any;
    style?: React.CSSProperties;
    className?: string;
}
declare const Panel: React.FC<PanelProps>;
export default Panel;
