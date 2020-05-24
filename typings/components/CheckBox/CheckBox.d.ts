import * as React from "react";
export interface CheckBoxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean, e: React.MouseEvent) => any;
}
declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
