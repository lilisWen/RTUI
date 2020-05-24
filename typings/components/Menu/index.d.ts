import { MenuProps } from './menu';
import { MenuItemProps } from './menuitem';
import { SubMenuProps } from './submenu';
import * as React from 'react';
export declare type IMenuComponent = React.FC<MenuProps> & {
    MenuItem: React.FC<MenuItemProps>;
    SubMenu: React.FC<SubMenuProps>;
};
declare const TranMenu: IMenuComponent;
export default TranMenu;
