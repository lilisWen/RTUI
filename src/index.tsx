import * as React from 'react'
import * as ReactDom from 'react-dom'
import ButtonExample from './examples/buttonexample'
import { Button, ButtonGroup } from './components/button'
import { Menu, MenuItem, SubMenu } from './components/menu'
import MenuExample from './examples/menuexample'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

ReactDom.render(
    <Router>
        <div className='App'>
            <header className="header"></header>
            <main className="main">
                <aside className="aside">
                    <Menu mode='vertical' defaultIndex={'1'} onSelect={(index) => { console.log(index) }}>
                        <MenuItem > Rt-UI</MenuItem>
                        <MenuItem > 开始使用</MenuItem>
                        <MenuItem > 色彩搭配</MenuItem>
                        <MenuItem > 层级规范</MenuItem>
                        <MenuItem > Components</MenuItem>
                        <MenuItem disable> 通用</MenuItem>
                        <MenuItem ><Link to="/button-example">Button 按钮</Link></MenuItem>
                        <MenuItem disable> 布局</MenuItem>
                        <MenuItem ><Link to="/button-example">Grid 栅格</Link></MenuItem>
                        <MenuItem disable> 导航</MenuItem>
                        <MenuItem ><Link to="/menu-example">Menu 菜单</Link></MenuItem>
                    </Menu>
                </aside>
                <div className="container">
                    <Route path="/button-example" component={ButtonExample}></Route>
                    <Route path="/menu-example" component={MenuExample}></Route>
                </div>
            </main>
            <footer className="footer"></footer>

            {/* <div style={{ width: '500px', display: 'flex', justifyContent: 'space-between' }}>
                <Button type='default'>Default</Button>
                <Button loading type='primary' htmlType='button'>Primary</Button>
                <Button type='dashed'>Secondary</Button>
                <Button type='success'>Success</Button>
                <Button type='danger'>Danger</Button>
                <Button type='link'>Link</Button>
                <Button disable>Disable</Button>

            </div>
            <ButtonGroup size="small">
                <Button type='default'>Default</Button>
                <Button type='default'>Default</Button>
                <Button type='default'>Default</Button>
            </ButtonGroup>
            <ButtonGroup type='primary' >
                <Button type='primary'>primary</Button>
                <Button type='primary'>primary</Button>
                <Button type='primary'>primary</Button>
            </ButtonGroup>
            <ButtonGroup type='danger' size="large">
                <Button >primary</Button>
                <Button>primary</Button>
                <Button >primary</Button>
            </ButtonGroup>
            <Button size="large" type='default'>Default</Button>
            <Button loading size="large" type='primary' htmlType='button'>Primary</Button>
            <Button size="large" type='dashed'>Secondary</Button>
            <Button size="large" type='success'>Success</Button>
            <Button size="large" type='danger'>Danger</Button>
            <Button size="large" type='link'>Link</Button>
            <Button size="large" disable>Disable</Button>
            <Button size="small" type='default'>Default</Button>
            <Button loading size="small" type='primary' htmlType='button'>Primary</Button>
            <Button size="small" type='dashed'>Secondary</Button>
            <Button size="small" type='success'>Success</Button>
            <Button size="small" type='danger'>Danger</Button>
            <Button size="small" type='link'>Link</Button>
            <Button icon="ring" position="right" size="small" disable>Disable</Button>
            <Button icon="ring" position="left" size="small" disable>Disable</Button>
            <div>
                <Button outline >Default</Button>
                <Button outline type="primary">Primary</Button>
                <Button outline type="success">Success</Button>
                <Button outline type="danger">Danger</Button>
            </div>
            <div style={{ height: "200px" }}>
                <Menu defaultIndex={'2'} onSelect={(index) => { console.log(index) }}>
                    <SubMenu title="wow">
                        <MenuItem > 1</MenuItem>
                        <MenuItem disable> 2</MenuItem>
                        <MenuItem > 3</MenuItem>
                    </SubMenu>
                    <MenuItem > 1</MenuItem>
                    <MenuItem disable> 2</MenuItem>
                    <MenuItem > 3</MenuItem>
                </Menu>
            </div> */}

        </div>
    </Router>,
    document.getElementById('app')
)