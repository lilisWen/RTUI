import * as React from 'react'
import { useState, useEffect } from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { RadioClass } from '../../styles'
import { OptionProps } from './option'
import tuple from '../../utils/type'

const RadioStyles = tuple('radio', 'button')
type RadioStyle = (typeof RadioStyles)[number]

export interface RadioProps {
    value?: any
    defaultValue?: any
    onChange?: (checkedValue: any, e: React.MouseEvent) => any
    vertical?: boolean
    radioStyle?: RadioStyle
    className?: string
    style?: React.CSSProperties
}

const Radio: React.FC<RadioProps> = (props) => {

    const { radioStyle, vertical, children, style, defaultValue } = props
    const [checkedValue, setCheckedValue] = useState(defaultValue)

    useEffect(() => {
        if (!('value' in props) && 'defaultValue' in props) {
            setCheckedValue(defaultValue)
        }
    }, [])

    const renderChildren = () => {
        return React.Children.map(
            children,
            (child: React.ReactElement<OptionProps>) => {
                return React.cloneElement(child, {
                    onClick: handleClick,
                    checkedValue,
                    radioStyle,
                    vertical
                })
            }
        )
    }

    const handleClick: (value: any, e: React.MouseEvent) => any = (value, e) => {
        if (checkedValue !== value) {
            setCheckedValue(value)
            if (props.onChange) {
                props.onChange(value, e)
            }
        }
    }

    return (
        <div className={classNames(RadioClass('*', { vertical }))} style={style}>
            {renderChildren()}
        </div>
    )
}
Radio.defaultProps = {
    vertical: false,
    radioStyle: 'radio'
}
export default Radio
