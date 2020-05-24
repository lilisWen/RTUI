import * as React from 'react'
import classNames from 'classnames'
import { GridClass } from '../../styles/'
import { Option } from './Row'

export interface ColProps {
  /*栅格间隔*/
  gutter?: number
  /*栅格占位数*/
  span?: number
  /*向右偏移格数*/
  offset?: number
  /*响应式栅格，> 576px 生效*/
  sm?: Option
  /*> 768px 生效*/
  md?: Option
  /*> 992px */
  lg?: Option
  /*> 1200px 生效*/
  xl?: Option
  className?: string
  style?: React.CSSProperties
}

const Col: React.FC<ColProps> = (props) => {
  const {
    gutter,
    span,
    offset,
    sm,
    md,
    lg,
    xl,
    className,
    style,
    children,
    ...rest
  } = props
  const renderOption = () => {
    let OptionClass: any[] = []
    if (sm) {
      OptionClass.push(GridClass(`col-sm-span-${sm.span}`, `${sm.offset ? `col-sm-span-${sm.offset}` : ''}`))
    }
    if (md) {
      OptionClass.push(GridClass(`col-md-span-${md.span}`, `${md.offset ? `col-md-span-${md.offset}` : ''}`))
    }
    if (lg) {
      OptionClass.push(GridClass(`col-lg-span-${lg.span}`, `${lg.offset ? `col-lg-span-${lg.offset}` : ''}`))
    }
    if (xl) {
      OptionClass.push(GridClass(`col-xl-span-${xl.span}`, `${xl.offset ? `col-xl-span-${xl.offset}` : ''}`))
    }
    return OptionClass.join(' ')
  }
  return (
    <div
      className={classNames(GridClass('col', `col-span-${span}`, `col-offset-${offset}`), renderOption())}
      {...rest}
      style={{
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style
      }}
    >
      {children}
    </div>
  )
}
Col.defaultProps = {
  gutter: 0
}
export default Col
