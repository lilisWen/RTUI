import { CheckBoxProps } from './CheckBox';
import { CheckBoxGroupProps } from './CheckBoxGroup';
import * as React from 'react';
export declare type ICheckBoxComponent = React.FC<CheckBoxProps> & {
    CheckBoxGroup: React.FC<CheckBoxGroupProps>;
};
declare const TransCheckBox: ICheckBoxComponent;
export default TransCheckBox;
