import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { RadioClass } from '../../styles'
import tuple from '../../utils/type'

const RadioStyles = tuple('radio', 'button')
type RadioStyle = (typeof RadioStyles)[number]

export interface OptionProps {
    value: any
    checkedValue?: any
    radioStyle?: RadioStyle
    disable?: boolean
    vertical?: boolean
    className?: string
    onClick?: (checkedValue: any, e: React.MouseEvent) => any
}

const Option: React.FC<OptionProps> = (props) => {

    const { radioStyle, disable, vertical, value, checkedValue, children, onClick } = props
    const handleClick: React.MouseEventHandler = (e) => {
        if (disable || !onClick) {
            return
        }
        onClick(value, e)
    }
    const classnames = classNames(RadioClass('option', radioStyle, {
        checked: value === checkedValue,
        disable,
    }))
    return radioStyle === 'radio' ? (
        <label className={classnames} onClick={handleClick}>
            <span className="label-dot" />
            <div className="label-text">{children}</div>
        </label>
    ) : (
            <label className={classnames} onClick={handleClick}>
                <div className="label-text">{children}</div>
            </label>
        )
}
Option.defaultProps = {
    disable: false,
    vertical: false
}
export default Option
