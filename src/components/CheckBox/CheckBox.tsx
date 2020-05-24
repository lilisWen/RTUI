import * as React from "react";
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CheckBoxClass } from '../../styles/'

export interface CheckBoxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean, e: React.MouseEvent) => any;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {

  const { checked, defaultChecked, disabled, indeterminate, onChange, children } = props
  const [derivedChecked, setDerviedChecked] = useState(defaultChecked)
  useEffect(() => {
    if ('checked' in props) {
      setDerviedChecked(checked)
    }
  })
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      return;
    }
    setDerviedChecked(!derivedChecked)
    if (onChange) {
      onChange(!derivedChecked, e);
    }
  };
  return (
    <div className={classNames(CheckBoxClass('*'))} onClick={handleClick}>
      <div
        className={classNames(CheckBoxClass("selection", {
          disabled,
          indeterminate,
          checked: derivedChecked || props.checked
        }))}
      />
      {children}
    </div>
  );
}

export default CheckBox;
