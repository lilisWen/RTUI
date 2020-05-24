import * as React from 'react'
import classNames from 'classnames'
import tuple from '../../utils/type'
import { InputClass } from '../../styles'
import Icon from "../Icon/icon"

const InputSizes = tuple('large', 'default', 'small')
type InputSize = (typeof InputSizes)[number]

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    disable?: boolean;
    size?: InputSize;
    icon?: string;
    prepend?: string | React.ReactElement;
    append?: string | React.ReactElement;
    value?: any,
    type?: string
}
const Input: React.FC<InputProps> = (props) => {
    const { disable, size, icon, prepend, append, type, ...restprops } = props
    const classnames = classNames(InputClass('wrapper', {
        'append': typeof (append) === 'string',
        'prepend': typeof (prepend) === 'string',
        'append-icon': typeof (append) === 'object',
        'prepend-icon': typeof (prepend) === 'object',
        disable
    }))
    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return ''
        }
        return value
    }

    if ('value' in props) {
        delete restprops.defaultValue
        restprops.value = fixControlledValue(props.value)
    }

    return (<div className={classnames}>
        {prepend && <div className="rt-input-group-prepend">{typeof (prepend) === 'string' ? <span className="rt-input-string">{prepend}</span> : <div className="rt-input-prepend-icon">{prepend}</div>}</div>}
        {icon && <div className="rt-input-icon-wrapper"><Icon name={icon} /></div>}
        {append && !prepend && <div className="rt-input-group-append">{typeof (append) === 'string' ? <span className="rt-input-string">{append}</span> : <div className="rt-input-append-icon">{append}</div>}</div>}
        <input type={type} className='rt-input-inner' disabled={disable} {...restprops} />
        {append && prepend && <div className="rt-input-group-append">{typeof (append) === 'string' ? <span className="rt-input-string">{append}</span> : <div className="rt-input-append-icon">{append}</div>}</div>}
    </div>
    )
}
Input.defaultProps = {
    disable: false,
    size: 'default'
}
Input.displayName = 'Input'
export default Input