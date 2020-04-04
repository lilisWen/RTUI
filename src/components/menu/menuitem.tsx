import * as React from 'react'
import { useContext } from 'react'
import classNames from 'classnames'
import { MenuClass } from '../../styles'
import { MenuContext } from './menu'
export interface MenuItemProps {
    index?: string;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {

    const { index, disable, className, style, children } = props
    const context = useContext(MenuContext)
    const classnames = classNames(MenuClass('item', {
        disable,
        'active': context.index === index
    }), className)
    const handleClick = () => {
        if (context.onSelect && !disable && typeof index === 'string') {
            context.onSelect(index)
        }
    }
    return <li className={classnames} style={style} onClick={handleClick}>
        {children}
    </li>
}
MenuItem.displayName = 'MenuItem'
export default MenuItem