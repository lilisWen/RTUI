import * as React from 'react';
export interface RowProps {
    gutter?: number;
    className?: string;
    style?: React.CSSProperties;
}
export interface Option {
    span: number;
    offset?: number;
}
declare const Row: React.FC<RowProps>;
export default Row;
