import * as React from 'react'
import { useState, createContext } from 'react'
import classNames from 'classnames'
import * as PropTypes from 'prop-types'
import { tuple } from '../../utils/type'
import { MenuClass } from '../../styles'
import { MenuItemProps } from "./menuitem"

const MenuModes = tuple('vertical', 'horizontal')
type MenuMode = (typeof MenuModes)[number]
type SelectCallback = (selectIndex: string) => void
interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
}
export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props: any) => {

    const { children, className, mode, style, defaultIndex, onSelect } = props
    const [currentActive, setActive] = useState(defaultIndex)
    const classnames = classNames(MenuClass('*', mode), className)
    const handleClick = (index: string) => {
        setActive(index);
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick,
        mode: mode
    }
    const renderMenuItem = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>//获取displayName判断是否为MenuItem
            if (childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: `${index}`
                })//复制节点添加index
            } else {
                console.error("Warning: Menu has a child not MenuItem")
            }
        })
    }
    return (<ul className={classnames} style={style}>
        <MenuContext.Provider value={passedContext}>
            {renderMenuItem()}
        </MenuContext.Provider>
    </ul>)
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal'
}
export default Menu