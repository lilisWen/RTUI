import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { GridClass } from '../../styles/'

export interface RowProps {
  gutter?: number
  className?: string
  style?: React.CSSProperties
}

export interface Option {
  span: number
  offset?: number
}

export interface IColProps {
  gutter?: number
  span?: number
  offset?: number
  sm?: Option
  md?: Option
  lg?: Option
  xl?: Option
  className?: string
  style?: React.CSSProperties
}


const Row: React.FC<RowProps> = (props) => {
  const { gutter, className, style, children, ...rest } = props
  return (
    <div
      className={classNames(GridClass('row', ''), className)}
      {...rest}
      style={{
        marginLeft: `${-gutter! / 2}px`,
        marginRight: `${-gutter! / 2}px`,
        ...style
      }}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child as React.ReactElement<IColProps>, {
          gutter
        })
      })}
    </div>
  )
}
Row.defaultProps = {
  gutter: 0
}
export default Row
