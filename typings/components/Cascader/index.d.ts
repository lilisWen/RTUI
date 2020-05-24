import { CascaderProps } from './Cascader';
import { CascaderMenuProps } from './CascaderMenu';
import * as React from 'react';
export declare type ICascaderComponent = React.FC<CascaderProps> & {
    CascaderMenu: React.FC<CascaderMenuProps>;
};
declare const TransCascader: ICascaderComponent;
export default TransCascader;
