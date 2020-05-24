import * as React from 'react'
import { useState, useEffect } from 'react'
import arrayIsEqual from '../../utils/arrayIsEqual'
import classNames from 'classnames'
import { PanelProps } from './Panel'
import { CollapseClass } from '../../styles'

export interface CollapseProps {
  activeKey?: string[]
  defaultActiveKey?: string[]
  accordion?: boolean
  showArrow?: boolean
  onChange?: (activeKey: string[], e: React.MouseEvent<HTMLElement>) => any
  className?: string
  style?: React.CSSProperties
}


const Collapse: React.FC<CollapseProps> = (props) => {
  const { activeKey, defaultActiveKey, accordion, showArrow, onChange, className, style, children } = props
  const [derivedActiveKey, setDerivedActiveKey] = useState(defaultActiveKey || [])
  useEffect(() => {
    if (!('activeKey' in props) || activeKey === derivedActiveKey) {
      return
    } else if (
      activeKey instanceof Array &&
      derivedActiveKey instanceof Array
    ) {
      const isEqual = arrayIsEqual(activeKey, derivedActiveKey)
      if (isEqual) {
        return
      } else {
        setDerivedActiveKey(activeKey)
      }
    }
    setDerivedActiveKey(activeKey)
  })

  const handleClickHeader = (key: string, e: React.MouseEvent<HTMLElement>) => {
    // only one open
    if (accordion) {
      setDerivedActiveKey(derivedActiveKey!.indexOf(key) > -1 ? [] : [key])
    } else {
      setDerivedActiveKey(derivedActiveKey!.indexOf(key) > -1 ? derivedActiveKey!.filter((item: string) => item !== key) : [key, ...derivedActiveKey])
    }
    if (onChange) {
      onChange(derivedActiveKey, e)
    }
  }

  const renderChildren = () => {
    return React.Children.map(
      children,
      (child: React.ReactElement<PanelProps>) => {
        if (!child) {
          return null
        }
        const key = child.key as string
        return React.cloneElement(child, {
          derivedActiveKey,
          showArrow,
          uniqueKey: key,
          onClick: handleClickHeader
        })
      }
    )
  }

  return (
    <div className={classNames(CollapseClass('*'), className)} style={style}>
      {renderChildren()}
    </div>
  )
}
Collapse.displayName = 'Collapse'
Collapse.defaultProps = {
  accordion: false,
  showArrow: true
}

export default Collapse
