import * as React from 'react'
import { useState, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuClass } from '../../styles'
import { MenuItemProps } from './menuitem'

export interface SubMenuProps {
    index?: string,
    className?: string,
    title?: string,
}
const SubMenu: React.FC<SubMenuProps> = (props) => {
    let timer: any;
    const { index, children, className, title } = props
    const [menuOpen, setOpen] = useState(false)
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 100)
    }
    const context = useContext(MenuContext)
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}
    const hoverEvents = context.mode === 'horizontal' ? {
        onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
        },
        onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
        }
    } : {}
    const classnames = classNames(MenuClass('item submenu-item'), {
        'active': context.index === index
    }, className)
    const renderSubMenuItem = () => {
        const subMenuItems = React.Children.map(children, (child, i) => {
            const subMenuElement = child as React.FunctionComponentElement<MenuItemProps>;
            if (subMenuElement.type.displayName === 'MenuItem') {
                return React.cloneElement(subMenuElement, { index: `${index}-${i}` })
            } else {
                console.error("Warning: SubMenu has a child not MenuItem")
            }
        })
        return <ul className={classNames(MenuClass('submenu', {
            'submenu-open': menuOpen
        }))}>
            {subMenuItems}
        </ul >
    }
    return (<li className={classnames} {...hoverEvents} >
        <div className={classNames(MenuClass('submenu-title'))} onClick={handleClick}>
            {title}
        </div>
        {renderSubMenuItem()}
    </li>)
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
