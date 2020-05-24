import * as React from 'react'
import classNames from 'classnames'
import { GridClass } from '../../styles/'
import { ColProps } from './Col'

export interface RowProps {
  gutter?: number
  className?: string
  style?: React.CSSProperties
}

export interface Option {
  span: number
  offset?: number
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
        return React.cloneElement(child as React.ReactElement<ColProps>, {
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
