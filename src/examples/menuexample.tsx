import * as React from 'react'
import { Menu, MenuItem, SubMenu } from '../components/menu'
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
                        <MenuItem>Option 1</MenuItem>
                        <MenuItem>Option 2</MenuItem>
                        <MenuItem>Option 3</MenuItem>
                        <SubMenu title="Option 4">
                            <MenuItem>Option 1</MenuItem>
                            <MenuItem>Option 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
        </div>
    }
}