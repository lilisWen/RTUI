import Col, { ColProps } from './Col';
import Row, { RowProps } from './Row';
import Grid from './Grid'
import * as React from 'react'

export type IGridComponent = React.FC<any> & {
    Col: React.FC<ColProps>,
    Row: React.FC<RowProps>
}
const TransGrid: IGridComponent = Grid as IGridComponent
TransGrid.Col = Col
TransGrid.Row = Row
export default TransGrid