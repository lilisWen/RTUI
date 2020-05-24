import * as React from 'react';
export interface Option {
    value: string;
    label: string;
    children?: Option[];
    disabled?: boolean;
}
export interface CascaderProps {
    options: Option[];
    placeholder?: string;
    changeOnSelect?: boolean;
    itemClassName?: string;
    itemStyle?: React.CSSProperties;
    onChange?: (valueArr: string[], selectedOptions: Option[]) => any;
    onSelect?: (valueArr: string[], selectedOptions: Option[]) => any;
    className?: string;
    style?: React.CSSProperties;
}
declare const Cascader: React.FC<CascaderProps>;
export default Cascader;
