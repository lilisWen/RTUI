import * as React from 'react';
declare const RadioStyles: ["radio", "button"];
declare type RadioStyle = (typeof RadioStyles)[number];
export interface RadioProps {
    value?: any;
    defaultValue?: any;
    onChange?: (checkedValue: any, e: React.MouseEvent) => any;
    vertical?: boolean;
    radioStyle?: RadioStyle;
    className?: string;
    style?: React.CSSProperties;
}
declare const Radio: React.FC<RadioProps>;
export default Radio;
