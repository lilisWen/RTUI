import * as React from 'react'
import { Menu } from '../components'
import Highlight from 'react-highlight'

export default class ButtonExample extends React.Component {
    render() {
        return <div className='button-example'>
            <section>
                <h1>Menu 导航菜单</h1>
                <p className="text">为页面提供导航的菜单列表。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">网站顶部和左侧的导航。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Menu>
                        <Menu.MenuItem>Option 1</Menu.MenuItem>
                        <Menu.MenuItem>Option 2</Menu.MenuItem>
                        <Menu.MenuItem>Option 3</Menu.MenuItem>
                        <Menu.SubMenu title="Option 4">
                            <Menu.MenuItem>Option 1</Menu.MenuItem>
                            <Menu.MenuItem>Option 2</Menu.MenuItem>
                        </Menu.SubMenu>
                    </Menu>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Menu>\n<Menu.MenuItem>Option 1</Menu.MenuItem>\n<Menu.MenuItem>Option 2</Menu.MenuItem>\n<Menu.MenuItem>Option 3</Menu.MenuItem>\n<Menu.SubMenu title='Option 4'>\n    <Menu.MenuItem>Option 1</Menu.MenuItem>\n    <Menu.MenuItem>Option 2</Menu.MenuItem>\n</Menu.SubMenu>\n</Menu>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Menu mode="vertical">
                        <Menu.MenuItem>Option 1</Menu.MenuItem>
                        <Menu.MenuItem>Option 2</Menu.MenuItem>
                        <Menu.MenuItem>Option 3</Menu.MenuItem>
                        <Menu.SubMenu title="Option 4">
                            <Menu.MenuItem>Option 1</Menu.MenuItem>
                            <Menu.MenuItem>Option 2</Menu.MenuItem>
                        </Menu.SubMenu>
                    </Menu>
                </div>
                <div className="code-example-box">
                    <div className="code-title">侧边导航</div>
                    <div className="code-description">竖直的侧边导航菜单。</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Menu mode='vertical'>\n<Menu.MenuItem>Option 1</Menu.MenuItem>\n<Menu.MenuItem>Option 2</Menu.MenuItem>\n<Menu.MenuItem>Option 3</Menu.MenuItem>\n<Menu.SubMenu title='Option 4'>\n    <Menu.MenuItem>Option 1</Menu.MenuItem>\n    <Menu.MenuItem>Option 2</Menu.MenuItem>\n</Menu.SubMenu>\n</Menu>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}