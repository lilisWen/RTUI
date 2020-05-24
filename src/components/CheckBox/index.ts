import CheckBox, { CheckBoxProps } from './CheckBox';
import CheckBoxGroup, { CheckBoxGroupProps } from './CheckBoxGroup';
import * as React from 'react'

export type ICheckBoxComponent = React.FC<CheckBoxProps> & {
    CheckBoxGroup: React.FC<CheckBoxGroupProps>
}
const TransCheckBox = CheckBox as ICheckBoxComponent
TransCheckBox.CheckBoxGroup = CheckBoxGroup
export default TransCheckBox