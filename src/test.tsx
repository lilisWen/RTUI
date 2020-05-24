import * as React from 'react'
import * as ReactDom from 'react-dom'
import 'highlight.js/styles/atelier-lakeside-dark.css';
import { Menu, Icon } from './components'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {
    ButtonExample, MenuExample, PopcoverExample, InputExample, RadioExample, SwitchExample,
    GridExample, CheckBoxExample, CollapseExample, TabsExample, MessageExample, CascaderExample,
    Introduce, Start
} from './examples'
ReactDom.render(
    <Router>
        <div className='App'>
            <header className="header">
                <div className="logo">
                    <Icon name="logo"></Icon>
                    <span className="text">Rt-UI</span>
                </div>
                <div className="github">
                    <Icon name="github"></Icon>
                </div>
            </header>
            <main className="main">
                <aside className="aside">
                    <Menu mode='vertical' defaultIndex={'1'} onSelect={(index) => { console.log(index) }}>
                        <Menu.MenuItem ><Link to="/introduce">Rt-UI</Link></Menu.MenuItem>
                        <Menu.MenuItem > <Link to="/start">开始使用</Link></Menu.MenuItem>
                        <Menu.MenuItem > Components</Menu.MenuItem>
                        <Menu.MenuItem disable> 通用</Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/button-example">Button 按钮</Link></Menu.MenuItem>
                        <Menu.MenuItem disable> 布局</Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/grid-example">Grid 栅格</Link></Menu.MenuItem>
                        <Menu.MenuItem disable> 导航</Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/menu-example">Menu 菜单</Link></Menu.MenuItem>
                        <Menu.MenuItem disable> 数据录入</Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/input-example">Input 输入框</Link></Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/radio-example">Radio 单选框</Link></Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/switch-example">Switch 开关</Link></Menu.MenuItem>
                        <Menu.MenuItem><Link to="/checkbox-example">CheckBox 选择框</Link></Menu.MenuItem>
                        <Menu.MenuItem><Link to="/cascader-example">Cascader 级联选择器</Link></Menu.MenuItem>
                        <Menu.MenuItem disable> 数据展示</Menu.MenuItem>
                        <Menu.MenuItem ><Link to="/popcover-example">Popcover 气泡卡片</Link></Menu.MenuItem>
                        <Menu.MenuItem><Link to="/collapse-example">Collapse 折叠面板</Link></Menu.MenuItem>
                        <Menu.MenuItem><Link to="/tabs-example">Tabs 标签</Link></Menu.MenuItem>
                        <Menu.MenuItem disable> 信息反馈</Menu.MenuItem>
                        <Menu.MenuItem><Link to="/message-example">Message 全局提示</Link></Menu.MenuItem>
                    </Menu>
                </aside>
                <div className="container">
                    <Route path="/introduce" component={Introduce}></Route>
                    <Route path="/start" component={Start}></Route>
                    <Route path="/button-example" component={ButtonExample}></Route>
                    <Route path="/menu-example" component={MenuExample}></Route>
                    <Route path="/popcover-example" component={PopcoverExample}></Route>
                    <Route path="/input-example" component={InputExample}></Route>
                    <Route path="/radio-example" component={RadioExample}></Route>
                    <Route path="/switch-example" component={SwitchExample}></Route>
                    <Route path="/grid-example" component={GridExample}></Route>
                    <Route path="/checkbox-example" component={CheckBoxExample}></Route>
                    <Route path="/collapse-example" component={CollapseExample}></Route>
                    <Route path="/tabs-example" component={TabsExample}></Route>
                    <Route path="/message-example" component={MessageExample}></Route>
                    <Route path="/cascader-example" component={CascaderExample}></Route>
                </div>
            </main>
            <footer className="footer"></footer>
        </div>
    </Router>,
    document.getElementById('app')
)