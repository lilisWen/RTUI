import * as React from 'react';
export interface MenuItemProps {
    index?: string;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
