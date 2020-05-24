import { ColProps } from './Col';
import { RowProps } from './Row';
import * as React from 'react';
export declare type IGridComponent = React.FC<any> & {
    Col: React.FC<ColProps>;
    Row: React.FC<RowProps>;
};
declare const TransGrid: IGridComponent;
export default TransGrid;
