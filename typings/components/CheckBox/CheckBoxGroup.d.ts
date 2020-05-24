import * as React from "react";
export interface Option {
    value: string;
    label: string | React.ReactNode;
    disabled?: boolean;
}
export interface CheckBoxGroupProps {
    options: Option[];
    defaultValue?: string[];
    title?: string | React.ReactNode;
    value?: string[];
    onChange?: (value: string[]) => any;
    className?: string;
    style?: React.CSSProperties;
}
declare const CheckBoxGroup: React.FC<CheckBoxGroupProps>;
export default CheckBoxGroup;
