import * as React from 'react';
export interface PopcoverProps {
    title: string | React.ReactNode;
    content: string | React.ReactNode;
    trigger?: 'click' | 'hover' | 'focus';
    position?: 'top' | 'left' | 'right' | 'bottom';
    className?: string;
    onVisibleChange?: (visible: boolean) => {};
    style?: React.CSSProperties;
}
declare const Popcover: React.FC<PopcoverProps>;
export default Popcover;
