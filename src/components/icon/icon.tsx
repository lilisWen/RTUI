import * as React from 'react'
import './importall.js'
import classNames from 'classnames';
import { IconClass } from '../../styles'
import { tuple } from '../../utils/type'

const IconThemes = tuple('light', 'dark')
type IconTheme = (typeof IconThemes)[number]

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
    theme?: IconTheme;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { name, className, fill, size, theme, ...restProps } = props
    if (name === null) return null
    return (< svg
        className={classNames(IconClass('*', theme), className)}
        aria-hidden="true"
        key={name}
        style={{ width: `${size}+'px'`, height: `${size}+'px'` }}
        {...restProps}>
        <use xlinkHref={`#${name}`} fill={fill}></use>
    </svg >
    )
}
Icon.displayName = 'Icon'
export default Icon