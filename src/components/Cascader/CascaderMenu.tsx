import * as React from 'react'

import classNames from 'classnames'
import Icon from "../Icon/icon"
import { CascaderClass } from '../../styles'

export interface Option {
  value: string
  label: string
  children?: Option[]
  disabled?: boolean
}

export interface CascaderMenuProps {
  options: Option[]
  level: number
  handleChangeValue: (option: Option, level: number) => any
  valueArr: string[]
  itemClassName?: string
  itemStyle?: React.CSSProperties
}

const CascaderMenu: React.FC<CascaderMenuProps> = (props) => {
  const { options, level, handleChangeValue, valueArr, itemClassName, itemStyle } = props
  const temp: Option = { value: '', label: '' }
  const [currentOption, setCurrentOption] = React.useState(temp)
  React.useEffect(() => {
    if (!valueArr) {
      setCurrentOption(null)
    }
    // 被截掉
    if (
      currentOption &&
      currentOption.value &&
      valueArr.indexOf(currentOption.value) === -1
    ) {
      setCurrentOption(null)
    }
  })

  const handleClickItem = (option: Option) => {
    if (option.disabled) {
      return
    }
    if (!currentOption || option.value !== currentOption.value) {
      setCurrentOption(option)
    }
    handleChangeValue(option, level)
  }

  return (
    <>
      <ul className={classNames(CascaderClass('cascadermenu'))}>
        {options.map(option => (
          <li
            className={classNames(CascaderClass('cascadermenu-item'), itemClassName, {
              selected: valueArr && valueArr.indexOf(option.value) > -1,
              'has-children': option.children && option.children.length,
              disabled: option.disabled
            })}
            style={itemStyle}
            key={option.value}
            onClick={() => handleClickItem(option)}
          >
            {option.label}
            {option.children && option.children.length && (
              <span className={classNames(CascaderClass('cascadermenu-item-icon-wrapper'))}>
                <Icon name="arrow" size={8} />
              </span>
            )}
          </li>
        ))}
      </ul>
      {currentOption &&
        currentOption.children &&
        currentOption.children.length && (
          <CascaderMenu
            options={currentOption.children}
            level={level + 1}
            handleChangeValue={handleChangeValue}
            valueArr={valueArr}
            itemClassName={itemClassName}
            itemStyle={itemStyle}
          />
        )}
    </>
  )
}

export default CascaderMenu
