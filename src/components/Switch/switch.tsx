import * as React from 'react'
import { useState } from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { tuple } from '../../utils/type'
import { SwitchClass } from '../../styles'

const SwitchSizes = tuple('small', 'default')
type SwitchSize = (typeof SwitchSizes)[number]
export interface SwitchProps {
    checked?: boolean
    defaultChecked?: boolean
    size?: SwitchSize,
    onChange?: (checked: boolean, e: React.MouseEvent) => any
    disable?: boolean
    className?: string
    style?: React.CSSProperties
}

export interface SwitchState {
    derivedChecked: boolean
}

const Switch: React.FC<SwitchProps> = (props) => {
    const { defaultChecked, size, onChange, disable, className, style } = props
    const [derivedChecked, setDerivedChecked] = useState(defaultChecked)
    const handleClick: React.MouseEventHandler = (e) => {
        if (disable) {
            return
        }
        setDerivedChecked(!derivedChecked)
        if (onChange) {
            onChange(!derivedChecked, e)
        }
    }
    const switchClassName = classNames(SwitchClass('*', size, {
        checked: derivedChecked,
        disable
    }), className)
    return (
        <span
            className={switchClassName}
            onClick={handleClick}
            style={style}
        >
            <span className={classNames(SwitchClass('core'))} />
        </span>
    )
}

Switch.defaultProps = {
    size: 'default',
    defaultChecked: false,
    disable: false
}
export default Switch
