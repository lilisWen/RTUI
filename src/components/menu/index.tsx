import Menu, { MenuProps } from './menu';
import MenuItem, { MenuItemProps } from './menuitem';
import SubMenu, { SubMenuProps } from './submenu'
import * as React from 'react'
export type IMenuComponent = React.FC<MenuProps> & {
    MenuItem: React.FC<MenuItemProps>,
    SubMenu: React.FC<SubMenuProps>
}
const TranMenu = Menu as IMenuComponent
TranMenu.MenuItem = MenuItem
TranMenu.SubMenu = SubMenu
export default TranMenu
