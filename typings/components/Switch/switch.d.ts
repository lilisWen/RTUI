import * as React from 'react';
declare const SwitchSizes: ["small", "default"];
declare type SwitchSize = (typeof SwitchSizes)[number];
export interface SwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    size?: SwitchSize;
    onChange?: (checked: boolean, e: React.MouseEvent) => any;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
