import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon/Icon'
import Transition from '../Transition/transition'
import { CollapseClass } from '../../styles'

export interface PanelProps {
  header: string | React.ReactNode
  uniqueKey?: string
  disabled?: boolean
  showArrow?: boolean
  derivedActiveKey?: string[]
  onClick?: (key: string, e: React.MouseEvent<HTMLElement>) => any
  style?: React.CSSProperties
  className?: string
}

const Panel: React.FC<PanelProps> = (props) => {
  const { header, disabled, derivedActiveKey, uniqueKey, showArrow, className, style, children, onClick } = props
  const handleClickHeader: React.MouseEventHandler<HTMLElement> = e => {
    if (disabled) {
      return
    }
    onClick!(uniqueKey!, e)
  }
  const active = derivedActiveKey!.indexOf(uniqueKey!) > -1

  return (
    <>
      <div
        className={classNames(CollapseClass('panel-header'), {
          disabled,
          active,
          'with-arrow': showArrow
        })}
        onClick={handleClickHeader}
      >
        {showArrow && (
          <span className="arrow-wrapper">
            <Icon name="arrow" size={10} />
          </span>
        )}
        {header}
      </div>
      <Transition in={active} animation='unfold' timeout={0}>
        <div className={classNames('rt-panel-body', className)} style={style}>
          {children}
        </div>
      </Transition>
    </>
  )
}

export default Panel
