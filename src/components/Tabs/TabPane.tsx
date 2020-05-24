import * as React from "react";
import classNames from 'classnames';
import { TabsClass } from '../../styles'

export interface TabPaneProps {
  title: string | React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


const TabPane: React.FC<TabPaneProps> = (props) => {
  const { active, className, style, children } = props;
  return (
    <li
      className={classNames(TabsClass('tabpane'), className, { active })}
      style={style}
    >
      {children}
    </li>
  );
}


TabPane.displayName = 'TabPane'

export default TabPane;
