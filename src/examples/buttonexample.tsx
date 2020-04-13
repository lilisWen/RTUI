import * as React from 'react'
import { Button, ButtonGroup } from '../components/Button'
export default class ButtonExample extends React.Component {
    render() {
        return <div className='button-example'>
            <section>
                <h1>Button 按钮</h1>
                <p className="text">点击以开始即时操作。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">响应用户点击行为，触发相应业务逻辑。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ width: '600px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='default'>Default</Button>
                        <Button loading type='primary' htmlType='button'>Primary</Button>
                        <Button type='dashed'>Secondary</Button>
                        <Button type='success'>Success</Button>
                        <Button type='danger'>Danger</Button>
                        <Button type='link'>Link</Button>
                        <Button disable>Disable</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <ButtonGroup >
                        <Button type='default'>Left</Button>
                        <Button type='default'>Meddium</Button>
                        <Button type='default'>Right</Button>
                    </ButtonGroup>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>

        </div>
    }
}