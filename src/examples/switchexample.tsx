import * as React from 'react'
import Switch from '../components/Switch/switch'
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
                    <Switch></Switch>
                    <Switch disable></Switch>
                    <Switch size="small" ></Switch>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
        </div>
    }
}