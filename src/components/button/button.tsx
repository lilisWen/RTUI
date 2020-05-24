import * as  React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonClass } from '../../styles/index'
import tuple from '../../utils/type';
import Icon from "../Icon/icon"
/*使用tuple函数生成一个类型*/
/*
type与interface的异同
只有type可以定义基本类型、联合类型还可使用typeof获取变量类型生成数组
*/
const ButtonTypes = tuple('default', 'primary', 'dashed', 'success', 'danger', 'link')
export type ButtonType = (typeof ButtonTypes)[number]
const ButtonSizes = tuple('small', 'default', 'large')
export type ButtonSize = (typeof ButtonSizes)[number]
const ButtonHTMLTypes = tuple('submit', 'button', 'reset')
export type ButtonHtmlType = (typeof ButtonHTMLTypes)[number]
const ButtonShapes = tuple('round', 'circle')
export type ButtonShape = (typeof ButtonShapes)[number]
const ButtonPositions = tuple('right', 'left')
export type ButtonPosition = (typeof ButtonPositions)[number]

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    htmlType?: ButtonHtmlType;//button的基础type
    size?: ButtonSize;//button的大小
    type?: ButtonType;//button的样式
    href?: string;
    disable?: boolean;
    icon?: string;
    loading?: boolean;
    className?: string;
    children?: React.ReactNode;
    shape?: ButtonShape;
    position?: ButtonPosition;
    outline?: boolean
    ghost?: boolean
}

export default class button extends React.Component<ButtonProps> {
    static defaultProps = {
        htmlType: 'button',
        size: 'default',
        type: 'default',
        href: '',
        disable: false,
        icon: '',
        loading: false,
        shape: 'round',
        position: 'left'
    };

    static propTypes = {
        htmlType: PropTypes.oneOf(ButtonHTMLTypes),
        size: PropTypes.oneOf(ButtonSizes),
        type: PropTypes.string,
        href: PropTypes.string,
        disable: PropTypes.bool,
        icon: PropTypes.string,
        loading: PropTypes.bool,
        className: PropTypes.string,
        shape: PropTypes.oneOf(ButtonShapes),
        position: PropTypes.oneOf(ButtonPositions)
    };

    renderButton = () => {
        const { children, htmlType, size, position, type, href, disable, icon, loading, shape, outline, className, ghost, ...restProps } = this.props;
        const classnames = classNames(
            ButtonClass('*', position, shape, type, {
                large: size === 'large',
                small: size === 'small',
                disable: disable,
                outline
            }),
            { ghost },
            className
        )
        const iconNode = <Icon name={icon} style={React.Children.count(children) >= 1 ? { marginRight: '4px' } : null}></Icon>
        if (type === 'link') {
            return <a href={href} className={classnames}>{children}</a>
        }
        return <button className={classnames} type={htmlType} disabled={disable} {...restProps}>
            {loading ? <span className={ButtonClass('loading')}><Icon name="ring" /></span> : ""}
            {position === 'left' ? (icon !== '' ? iconNode : null) : null}
            {children}
            {position === 'right' ? (icon !== '' ? iconNode : null) : null}
        </button>
    }
    render() {
        return this.renderButton()
    }
}