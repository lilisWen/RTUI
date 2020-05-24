import * as React from 'react';
declare const RadioStyles: ["radio", "button"];
declare type RadioStyle = (typeof RadioStyles)[number];
export interface OptionProps {
    value: any;
    checkedValue?: any;
    radioStyle?: RadioStyle;
    disable?: boolean;
    vertical?: boolean;
    className?: string;
    onClick?: (checkedValue: any, e: React.MouseEvent) => any;
}
declare const Option: React.FC<OptionProps>;
export default Option;
