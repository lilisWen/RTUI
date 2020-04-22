import * as React from "react";
import { useState } from 'react'
import classNames from 'classnames';
import CheckBox from "./CheckBox";
import { CheckBoxClass } from "../../styles";

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

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props) => {

  const { defaultValue, value, onChange, options, title, className, style } = props;
  const [derivedValue, setDerivedValue] = useState(defaultValue)

  const handleChange = (key: string) => {
    const newValue = derivedValue.indexOf(key) > -1 ? derivedValue.filter(item => item !== key)
      : [key, ...derivedValue];
    setDerivedValue(newValue)
    if (onChange) {
      onChange(newValue);
    }
  };

  const selectAll = (isAll: boolean) => {
    const newValue = isAll
      ? options.reduce((prev, current) => [current.value, ...prev], [])
      : [];
    console.log(newValue)
    setDerivedValue(newValue)
    if (onChange) {
      onChange(newValue);
    }
  };

  const getStatus = () => {
    console.log(derivedValue)
    if (derivedValue.length > 0 && derivedValue.length < options.length) {
      return "indeterminate";
    } else if (derivedValue.length === options.length) {
      return "all";
    } else {
      return "none";
    }
  };

  const handleAll = () => {
    if (getStatus() === "all") {
      selectAll(false);
    } else {
      selectAll(true);
    }
  };

  return (
    <div className={classNames(CheckBoxClass('checkboxgroup'), className)} style={style}>
      <CheckBox
        indeterminate={getStatus() === "indeterminate"}
        checked={getStatus() === "all"}
        onChange={handleAll}
      >
        {title}
      </CheckBox>
      {options.map(option => (
        <CheckBox
          key={option.value}
          checked={derivedValue.indexOf(option.value) > -1}
          defaultChecked={derivedValue.indexOf(option.value) > -1}
          disabled={option.disabled === true}
          onChange={() => handleChange(option.value)}
        >
          {option.label}
        </CheckBox>
      ))}
    </div>
  );
}
CheckBoxGroup.defaultProps = {
  title: "All",
  defaultValue: ['apple']
};
export default CheckBoxGroup;
