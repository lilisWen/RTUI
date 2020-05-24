import * as React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import CascaderMenu from './CascaderMenu'
import Icon from "../Icon/icon"
import Transition from '../Transition/transition'
import { CascaderClass } from '../../styles'

export interface Option {
  value: string
  label: string
  children?: Option[]
  disabled?: boolean
}

export interface CascaderProps {
  options: Option[]
  placeholder?: string
  changeOnSelect?: boolean
  itemClassName?: string
  itemStyle?: React.CSSProperties
  onChange?: (valueArr: string[], selectedOptions: Option[]) => any
  onSelect?: (valueArr: string[], selectedOptions: Option[]) => any
  className?: string
  style?: React.CSSProperties
}

const Cascader: React.FC<CascaderProps> = (props) => {
  const { options, placeholder, changeOnSelect, itemStyle, itemClassName, onChange, onSelect, className, style } = props
  const [valueArr, setvalueArr] = useState([])//保存所有的option的value
  const [selectedOptions, setSelectedOptions] = useState([])//保存所有的选择的option的value
  const [inputValueFromLabel, setInputValueFromLabel] = useState('')//保存input的lable
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuStyle, setMenuStyle] = useState({ top: '' })
  let cascaderEl: HTMLDivElement//保存cascader节点

  useEffect(() => {
    const { bottom, top } = cascaderEl.getBoundingClientRect()
    setMenuStyle({ top: `${bottom - top + 4}px` })
    document.addEventListener('click', handleClickDocument, true)
    return () => {
      document.removeEventListener('click', handleClickDocument, true)
    }
  }, [])


  const handleClickDocument: EventListener = e => {
    //监听document，点击除input外其他地方则关闭menu
    const target = e.target
    if (!cascaderEl.contains(target as Node) && menuVisible) {
      setMenuVisible(false)
    }
  }

  const saveCascaderEl = (node: HTMLDivElement) => {
    cascaderEl = node
  }

  const handleClickInput = () => {
    setMenuVisible(!menuVisible)
  }

  const handleChangeValue = (option: Option, level: number) => {
    // 判断是否为最后一级
    if (!option.children) {
      handleClickLastLevel(option, level)
    } else {
      handleClickMidLevel(option, level)
    }
  }

  // 监听点击最后一层，关闭menu，判断点击的option的value与上次的是否相同，不同则更新input的展示值
  const handleClickLastLevel = (option: Option, level: number) => {
    if (valueArr![level] === option.value) {
      setMenuVisible(false)
    } else {
      const valueArrCopy = JSON.parse(JSON.stringify(valueArr))
      const selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions))
      valueArrCopy.splice(level, 1, option.value)
      selectedOptionsCopy.splice(level, 1, option)
      setvalueArr(valueArrCopy)
      setSelectedOptions(selectedOptionsCopy)
      setInputValueFromLabel(getLabelString(selectedOptionsCopy))//获取label更新到input
      setMenuVisible(false)
      if (onChange) {
        onChange(valueArrCopy, selectedOptionsCopy)
      }
    }
  }

  // 监听点击中间层，若改变，只在 changeOnSelect 为真时更新input展示值
  const handleClickMidLevel = (option: Option, level: number) => {
    // 相同，截掉后面的
    if (valueArr![level] === option.value) {
      // 实时变化
      if (changeOnSelect) {
        setvalueArr(valueArr!.slice(0, level + 1))
        setSelectedOptions(selectedOptions!.slice(0, level + 1))
        setInputValueFromLabel(getLabelString(selectedOptions!.slice(0, level + 1)))//获取label更新到input
      } else {
        setvalueArr(valueArr!.slice(0, level + 1))
        setSelectedOptions(selectedOptions!.slice(0, level + 1))
      }
      if (onSelect) {
        onSelect(
          valueArr!.slice(0, level + 1),
          selectedOptions!.slice(0, level + 1)
        )
      }
    } else {
      // 不同，替换并截掉后面的
      const valueArrCopy = JSON.parse(JSON.stringify(valueArr))
      const selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions))
      valueArrCopy.splice(level, 1, option.value)
      selectedOptionsCopy.splice(level, 1, option)
      if (changeOnSelect) {
        setvalueArr(valueArrCopy.slice(0, level + 1))
        setSelectedOptions(selectedOptionsCopy.slice(0, level + 1))
        setInputValueFromLabel(getLabelString(selectedOptionsCopy.slice(0, level + 1)))//获取label更新到input
      } else {
        setvalueArr(valueArrCopy.slice(0, level + 1))
        setSelectedOptions(selectedOptionsCopy.slice(0, level + 1))
      }
      if (onSelect) {
        onSelect(
          valueArrCopy.slice(0, level + 1),
          selectedOptionsCopy.slice(0, level + 1)
        )
      }
    }
  }

  const getLabelString = (selectedOptions: Option[]): string => {
    const prev: string[] = []
    return (
      selectedOptions
        .reduce((base, current: Option) => {
          base.push(current.label)
          return base
        }, prev)
        .join(' / ') || ''
    )
  }

  const handleOnClear = () => {
    setvalueArr([])
    setSelectedOptions([])
    setInputValueFromLabel('')
    setMenuVisible(false)
    if (onChange) {
      onChange([], [])
    }
  }

  return (
    <div
      className={classNames(CascaderClass('*'), {
        active: menuVisible
      })}
      ref={saveCascaderEl}
    >
      <span className={classNames(CascaderClass('input-wrapper'))}>
        {placeholder && !inputValueFromLabel && (
          <span className={classNames(CascaderClass('placeholder'))}>{placeholder}</span>
        )}
        <input
          type="text"
          className={classNames(CascaderClass('input'), [className])}
          style={style}
          readOnly={true}
          onClick={handleClickInput}
          value={inputValueFromLabel}
        />
        <span className={classNames(CascaderClass('icon-wrapper'), ['arrow'])}>
          <Icon name="arrow" size={8} />
        </span>
        {inputValueFromLabel && (
          <span
            className={classNames(CascaderClass('icon-wrapper'), ['close'])}
            onClick={handleOnClear}
          >
            <Icon name="close" size={10} />
          </span>
        )}
      </span>
      {options && options.length && (
        <Transition in={menuVisible} animation="zoom-in-top" timeout={300}>
          <div className={classNames(CascaderClass('menu-container'))} style={menuStyle}>
            <CascaderMenu
              options={options}
              level={0}
              handleChangeValue={handleChangeValue}
              valueArr={valueArr}
              itemClassName={itemClassName}
              itemStyle={itemStyle}
            />
          </div>
        </Transition>
      )}
    </div>
  )
}

Cascader.defaultProps = {
  changeOnSelect: false
}
export default Cascader
