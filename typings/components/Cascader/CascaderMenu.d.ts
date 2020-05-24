import * as React from 'react';
export interface Option {
    value: string;
    label: string;
    children?: Option[];
    disabled?: boolean;
}
export interface CascaderMenuProps {
    options: Option[];
    level: number;
    handleChangeValue: (option: Option, level: number) => any;
    valueArr: string[];
    itemClassName?: string;
    itemStyle?: React.CSSProperties;
}
declare const CascaderMenu: React.FC<CascaderMenuProps>;
export default CascaderMenu;
