import * as React from 'react'
import './importall.js'
import classNames from 'classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
export default class Icon extends React.Component<IconProps> {
    handelClick = (e: any) => {
        const { onClick } = this.props
        e.nativeEvent.stopImmediatePropagation()
        if (onClick) onClick(e)
    }
    render() {
        const { name, className, fill, onClick, ...restProps } = this.props
        if (name === null) return null
        return (
            <svg className={classNames('icon', className)} onClick={this.handelClick} key={name}{...restProps}>
                <use xlinkHref={`#${name}`} fill={fill}></use>
            </svg >
        )
    }
}