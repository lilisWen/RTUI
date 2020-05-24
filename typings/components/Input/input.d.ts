import * as React from 'react';
declare const InputSizes: ["large", "default", "small"];
declare type InputSize = (typeof InputSizes)[number];
export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    disable?: boolean;
    size?: InputSize;
    icon?: string;
    prepend?: string | React.ReactElement;
    append?: string | React.ReactElement;
    value?: any;
    type?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
