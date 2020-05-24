import * as React from "react";
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { TabPaneProps } from './TabPane'
import { TabsClass } from '../../styles/'

export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => any;
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


const Tabs: React.FC<TabsProps> = (props) => {
  const { activeKey, defaultActiveKey, onChange, children, vertical, className, style } = props
  const [derivedActiveKey, setDerivedActivekey] = useState(defaultActiveKey || '')

  let headRef: HTMLUListElement;
  let roleRef: HTMLLIElement;
  let bodyRef: HTMLUListElement;
  let keys: string[] = []
  let allkey: object = {}

  useEffect(() => {
    if ("activeKey" in props) {
      setDerivedActivekey(activeKey)
    }
  })
  useEffect(() => {
    //ComponentDidMount
    // set the first key as default
    console.log('componentDidMount')
    if (!("defaultActiveKey" in props) && !("activeKey" in props)) {
      setDerivedActivekey(keys[0])
    } else {
      console.log('wow')
      locateUnderline(derivedActiveKey, allkey[derivedActiveKey]);
    }
  }, [])

  useEffect(() => {
    //ComponentDidUpdate
    console.log('ComponentDidUpdate')
    if (derivedActiveKey) {
      locateUnderline(derivedActiveKey, allkey[derivedActiveKey]);
    }
  })

  const locateUnderline = (key: string, node: HTMLElement) => {
    const { left: headLeft, top: headTop } = headRef.getBoundingClientRect();
    const { left, right, top, bottom } = node.getBoundingClientRect();
    if (vertical) {
      roleRef.style.height = bottom - top + "px";
      roleRef.style.transform = `translateY(${top - headTop}px)`;
    } else {
      // locate the underline
      roleRef.style.width = right - left + "px";
      roleRef.style.transform = `translateX(${left - headLeft}px)`;
      // switch the pane
      const index: number = keys.indexOf(key);
      bodyRef.style.transform = `translateX(${-100 * index}%)`;
    }
  };
  const getTitles = (): React.ReactNode[] => {
    const nodes = React.Children.map(children, (child: React.ReactElement<TabPaneProps>) => {
      if (!child) {
        return null;
      }
      const key = child.key as string;
      keys.push(key)
      return (
        <li
          key={key}
          ref={(node) => {
            allkey[key] = node
          }}
          onClick={(e: React.MouseEvent) => { handleClickTitle(key, child.props.disabled, e) }}
          className={classNames(TabsClass("title"), {
            active: key === derivedActiveKey,
            disabled: child.props.disabled
          })}
        >
          {child.props.title}
        </li>
      );
    }
    );
    return nodes
  };

  const getPanes = (): React.ReactNode[] => {
    const nodes = React.Children.map(children, (child: React.ReactElement<TabPaneProps>) => {
      if (!child) {
        return null;
      }
      keys.push(child.key as string)
      const active = child.key === derivedActiveKey;
      if (vertical && !active) {
        return null;
      }
      return React.cloneElement(child, { active });
    }
    );
    return nodes
  };

  const handleClickTitle = (key: string, disabled: boolean, e: React.MouseEvent) => {
    if (disabled) {
      return;
    }
    if (key !== derivedActiveKey) {
      setDerivedActivekey(key)
      if (onChange) {
        onChange(key);
      }
    }
  };
  const saveHeadRef = (node: HTMLUListElement) => {
    headRef = node;
  };
  const saveRoleRef = (node: HTMLLIElement) => {
    roleRef = node;
  };
  const saveBodyRef = (node: HTMLUListElement) => {
    bodyRef = node;
  };
  return (
    <div className={classNames(TabsClass('*', { vertical }), className)} style={style}>
      <ul
        className={classNames(TabsClass("head"), { vertical })}
        ref={saveHeadRef}
      >
        {getTitles()}
        <li
          className={classNames(TabsClass("role"), {
            vertical,
            horizontal: !vertical
          })}
          ref={saveRoleRef}
        />
      </ul>
      <ul
        className={classNames(TabsClass("body"), { vertical })}
        ref={saveBodyRef}
      >
        {getPanes()}
      </ul>
    </div>
  );
}

export default Tabs;
