import * as React from 'react';
import { Option } from './Row';
export interface ColProps {
    gutter?: number;
    span?: number;
    offset?: number;
    sm?: Option;
    md?: Option;
    lg?: Option;
    xl?: Option;
    className?: string;
    style?: React.CSSProperties;
}
declare const Col: React.FC<ColProps>;
export default Col;
