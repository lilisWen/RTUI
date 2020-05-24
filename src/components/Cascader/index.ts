import Cascader, { CascaderProps } from './Cascader';
import CascaderMenu, { CascaderMenuProps } from './CascaderMenu';
import * as React from 'react'

//交叉类型
export type ICascaderComponent = React.FC<CascaderProps> & {
    CascaderMenu: React.FC<CascaderMenuProps>,
}
const TransCascader = Cascader as ICascaderComponent
TransCascader.CascaderMenu = CascaderMenu
export default TransCascader